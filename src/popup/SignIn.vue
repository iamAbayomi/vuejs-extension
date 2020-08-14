<template>
  <div class="container">
    <div class="extension-form">
      <div class="form">
        <img
          class="header-logo"
          src="../images/spiinge-logo.png"
        >
        <div class="bottom-line" />
        <!--Submit Button-->
        <a
          target="_blank"
          href="localhost://3000"
        > 
          <button
            type="submit"
            value="Save"
            class="blue-button"
            @click="saveWebsites"
          >
            Sign In
          </button>
        </a>
        <p class="section-description">
          Sign in to use Spiinge
        </p>
      </div>
    </div>
  </div>
</template>

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
    width: 300px;
    margin-bottom: 10px ;
    background-color: white;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-color: #E1DADA ;;
    border-radius: 4px;
    border-width: 0.1px;
    border-style: solid;
}

.form{
    padding: 10px 20px 0px;
    margin-bottom: 0px;
}

.section-description{
    font-size: 16px;
    margin: 20px 0px 30px 0px;
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
    max-width:300px;
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
    margin-top: 15px;
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

<script>
export default {

}
</script>
