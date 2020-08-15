<template>
  <div class="container">
    <p> Message Received {{ message }} </p>
    <p> Error {{ error }} </p>
    <button
      @click="receiveMessage"
    >
      click Me
    </button>
  </div> 
</template>

<style scoped>
    .container{
        width: 300px;
    }

</style>


<script>
export default {
    data(){
        return{
            message : ' ', 
            error: ''
        }
    },
    mounted(){
        this.receiveMessage()
    },
    methods: {
        receiveMessage(){
            console.log('This is the method')
            chrome.runtime.onMessageExternal.addListener(
                function(request, sender, sendResponse) {
                 
                        this.message = request.message
                        this.error = request
                 
                       console.log('Inside the request and response method')
                       sendResponse('hello')
                }
            )
        }
    }    
}
</script>