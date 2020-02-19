<template>
  <div class="about-page" id="about-page">
    <div class="profile-container">
      <img class="profile_pic" src="http://res.cloudinary.com/corgi1989/image/upload/v1481740853/henry-photo-2_klryvn.png"/>
      <div class="profile">
          <p>I have become a software developer for over 2 years of experience in both data integration and data analysis. I have produced valuable and actionable insights for our auditing team to make business decisions.</p>
          <p>I chose to become a web developer since programming is always interesting to me. I picked up a few languages and frameworks on the side and was able to build this website with JavaScript, React, Redux, Ruby and Rails.</p>
          <p>Now I have over 2 years of web development experience. I build web sites with various framwork such as Backbone and VueJS </p>
          <p>I really enjoy building interesting web applications. Creating an efficient and user friendly website always makes me feel proud.</p>
      </div>
    </div>
    <div class="links">
      <router-link to="/">Back</router-link>
      <a class="resume" target="_blank" href="https://drive.google.com/open?id=1DcgVZE-q2cPkqXpUMbKf4dJ0aRoehrKx">
        <img class="linkedin_img" :src="require('../assets/resume.png')" alt="RESUME">
      </a>
      <a class="linkedin" target="_blank" href="https://www.linkedin.com/in/henry-hsu-developer/">
        <img class="linkedin_img" :src="require('../assets/linkedin.png')" alt="LINKEDIN">
      </a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .about-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .profile-container {
      width: 70%;
      .profile_pic {
        width: 30%;
      }
    }
    .links {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .linkedin {
        width: 10%;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
