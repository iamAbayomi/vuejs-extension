<template>
  <div class="container">
    <p> Message Received {{ message }} </p>
    <p> Error {{ error }} </p>
  </div>
</template>

<style scoped>

</style>


<script>
export default {
    data(){
        return{
            message : ' ', 
            error: ''
        }
    },
    methods: {
        receiveMessage(){
            chrome.runtime.onMessageExternal.addListener(
                function(request, sender, sendResponse) {
                    if(request.message){
                        this.message = request.message
                        this.error = request
                    }
                }
            )
        }
    }    
}
</script>