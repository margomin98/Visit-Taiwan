import {
    createStore
} from 'vuex' //直接使用這個代替vuex3原本的 Vue.use(Vuex)
import shop_1 from '../assets/shop_1.png'
import shop_2 from '../assets/shop_2.png'
import shop_3 from '../assets/shop_3.png'
import snack_1 from '../assets/snack_1.png'
import snack_2 from '../assets/snack_2.png'
import snack_3 from '../assets/snack_3.png'


export const store = createStore({
    state: {

        shop: [{
                id: 1,
                name: '提提研黃金面膜 (2盒)',
                price: 250,
                image: shop_2

            }, {
                id: 2,
                name: 'Kaibeauty 眼影',
                price: 300,
                image: shop_1
            }, {
                id: 3,
                name: '小說',
                price: 400,
                image: shop_3
            }],

            snack:[{
                id: 4,
                name: '新貴派',
                price: 50,
                image: snack_2
            }, {
                id: 5,
                name: '鷄皮餅乾',
                price: 70,
                image: snack_3
            }

            , {
                id: 6,
                name: '蚵仔煎',
                price: 30,
                image: snack_1
            }

        ],
        cartItemCount: 0,
        cartItems: []
    },
    mutations: {
        addToCart(state, payload) {

            let item = payload;
            item = {
                ...item,
                quantity: 1
            }
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.id === item.id)
            
            if (bool) {
                let itemIndex = state.cartItems.findIndex(el => el.id === item.id)
                state.cartItems[itemIndex]['quantity'] += 1;
            } else {
                state.cartItems.push(item)
            }
        } else {
            state.cartItems.push(item)
        }
        state.cartItemCount++
    
},
removeItem(state, payload){
if (state.cartItems.length>0){
    let bool=state.cartItems.some(i=>i.id === payload.id)
if (bool){
    let index = state.cartItems.findIndex(el=>el.id === payload.id)
    if(state.cartItems[index]['quantity']!==0){
        state.cartItems[index]['quantity'] -=1
        state.cartItemCount--
    }
    if(state.cartItems[index]['quantity']===0){
        state.cartItems.splice(index,1)
    }
   
}
}
}
},
actions:{
    addToCart:(context,payload)=>{
        context.commit('addToCart',payload)
    },
   removeItem:(context,payload)=>{
        context.commit('removeItem',payload)
    }
}

})