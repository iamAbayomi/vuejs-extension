<template>
    <section class="contact-section">
        <!--Begining of Flex Container -->
        <div class="section-container">
            <!-- Heading Section -->
            <p class="section-text"></p>
            <!-- Begining of Contact form -->
            <div class="extension-form">
              <img class="header-logo" src="/src/images/spiinge-logo.png">
              <div class="bottom-line"></div>
              <p class="section-description">Add the Webpages you want to Save</p>
                <form class="form">
                    <label for="name-label" class="name-label" >Categories</label>
                    <input type="name"
                            class="name-text"
                            placeholder=" "
                            required
                    >
                    <label for="name-label" class="name-label">Webpages</label>
                    <input type="text"
                            class="name-text"
                            placeholder=" "
                            required
                    >
                    <p class="small-text">Webpages saved appear in categories</p>
                    <!--Submit Button-->
                    <input type="submit" value="Save" class="blue-button">
                </form>
              <div class="bottom-line"></div>

                <div class="bottom-text">Home</div>
            </div>
            <!-- End of Contact form -->
        </div>
        <!-- End of flex Container -->
    </section>
    
</template>

<script>
export default {
    
}
</script>


<style scoped>
body{
    background-color: #F4F8FC;
    height: 100%;
    margin: 0px;
    padding: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #ffffff; 

}
.extension-form{
    margin: auto;
    max-width: 300px;
    margin-bottom: 10px ;
    background-color: white;
    margin-top: 10vh;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-color: #E1DADA ;;
    border-radius: 4px;
    border-width: 0.1px;
    border-style: solid;
}

.form{
    padding: 10px 30px 0px;
    margin-bottom: 0px;
}


.section-description{
    font-size: 16px; 
    margin: 11px 0px 30px 0px;
    opacity: 0.4;
    text-align: center;
}



.name-text{
    width: 100%;
    height: 30px;
    border-color:#E1DADA ;
    border-width: 0.1px 1px 1px 0.1px;
    border-radius: 3px;
    margin-top: 10px;
    display: block;
    padding-left: 10px;
    margin-bottom: 20px ;
    /* background-color: #F4F8FC; */
}


.small-text{
    font-size: 13px;
    margin: 10px;
    opacity: 0.4;
    text-align: center;
}


.header-logo{
    width: 80px;
    margin: 10px 0px -15px 20px;
}


.bottom-line {
    width: 300px;
    /* margin: 8px 40px 0px 40px; */
    margin-left: 0px;
    margin-right: 0px;
    height: 25px;
    border-bottom: rgba(128, 128, 128, 0.37);
    border-bottom-style: solid;
    border-bottom-width: 1px;
}

.blue-button{
    width: 100%;
    height: 34px;
    background-color:#2762BC;
    color: white;
    font-size: 18px;
    margin-top: 10px;
    
    border-color:#2762BC;
    border-radius: 4px;
    border-style: solid;

    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.bottom-text{
    text-align: center;
    margin: 10px;
    color:rgba(128, 128, 128, 0.97);
}


</style>

