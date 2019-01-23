(() => {
    // component will go here
    const HomePageComponent = {
        template: "<h2>You're on the home page!</h2>"

    };

    const UserPageComponent = {
        template: "<h2>You're on the users page!</h2>"
    };

    const ContactPageComponent = {
        template: "<h2>You're on the contact page!</h2>"
    };

    const ErrorPageComponent = {
        template: "<h2>Page not found! Please try again</h2>"
    };

    const routes = [
        { path: '/', name: 'home', component: HomePageComponent},
        { path: '/users', name: 'users', component: UserPageComponent},
        { path: '/contact', name: 'users', component: ContactPageComponent},
        { path: '*', name: 'error', component: ErrorPageComponent}
    ];

    const router = new VueRouter({
        routes
    });

    const vm = new Vue({
        el: '#app',

        data: {
            message: "Hi, from Vue!"
        },

        created: function() {
            console.log('parents is live');
        },

        components: {
            'HomePageComponent': HomePageComponent,
            'UserPageComponent': UserPageComponent,
            'ContactPageComponent': ContactPageComponent
        },

        router: router

    })

})();