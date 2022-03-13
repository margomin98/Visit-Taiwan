<template>
<div id="app">
     <Header />
    <router-view/>
    <Footer />
</div>
   
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import {
    onMounted,
    ref
}

from 'vue'

import {
    getAuth,
    onAuthStateChanged,
    signOut
}

from 'firebase/auth'

export default {

    name: 'App',
    components: {
        Header,
        Footer
    }

    ,
    setup() {
        const isLoggedIn = ref(false);
        let auth;

        onMounted(() => {
                auth = getAuth();

                onAuthStateChanged(auth, (user) => {
                        if (user) {
                            isLoggedIn.value = true;
                        } else {
                            isLoggedIn.value = false;
                        }
                    }

                );
            }

        );

        const LogOut = () => {
            signOut(auth).then(() => {
                    router.push('/')
                }

            )
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
#app {
    font-family: 'Oswald', sans-serif;
}

body {
    padding:0;
    margin: 0;
}
ul li{
list-style-type:none;
}
.signupbtn,.loginbtn{
    color:#000003
}
    
</style>