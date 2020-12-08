
  
self.addEventListener('notificationclose', function(e) {  
    console.log('Closed notification: ' + notification);
  });

self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    var action = e.action;
  
    if (action === 'close') {
        notification.close();
    } else {
        e.preventDefault();
        console.log('notification', notification)
        notification.close();

        e.waitUntil(clients.matchAll({ type: 'window' }).then(clientsArr => {
            // If a Window tab matching the targeted URL already exists, focus that;
            console.log('clientsArr', clientsArr);
            const winCli = clientsArr.filter(windowClient => e.notification.data.url.split('?')[0] === windowClient.url.split('?')[0]);
            console.log('win focus', winCli.length, winCli);
            if (winCli.length == 0) {
                console.log('new win');
                clients.openWindow(e.notification.data.url).then(windowClient => windowClient ? windowClient.focus() : null);
            }
            else {
                console.log('focus on');
                winCli[0].navigate(e.notification.data.url).then(wc => wc.focus());
                console.log('focused', winCli[0].focused);
            }
          }));
    }
  });

self.addEventListener('push', event => {
    const displayNotif = data => {
        if (Notification.permission === 'granted') {
            const options = {
                body: data.title,
                icon: 'assets/img/home-opozorila.svg',
                vibrate: [100, 50, 100],
                data: {
                    dateOfArrival: Date.now(),
                    url: self.registration.scope + 'opozorila?show=' + data.id,
                    type: 'opozorilo',
                },
                actions: [
                    {action: 'show', title: 'Open'},
                    {action: 'close', title: 'Close'},
                ]
            };
            console.log('opt', options);
            const promiseChain = self.registration.showNotification('DrogArt', options);
            event.waitUntil(promiseChain);
            console.log('done');
        } else {
            console.log('fuck');
            Notification.requestPermission();
        }
    }
    if (event.data) {
        console.log('This push event has data: ', event.data);
        console.log(event);
        displayNotif(event.data.json());
    } else {
        console.log('This push event has no data.');
        fetch('https://drogapp.drogart.org/backend/opozorila.php?type=json')
        .then(res => res.json())
        .then(data => displayNotif(data[0]));
    }    
    
});
  

  