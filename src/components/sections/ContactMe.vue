<template>
  <PageSection type="contact" title="Contact Me" subtitle="Get in touch">
    <div class="contact__content">
      <h3 class="contact__title">
        <i class="ri-chat-3-line"></i>Talk to me
      </h3>

      <div class="contact__info">
        <div class="contact__data">
          <span class="contact__data-title">Email</span>
          <span class="contact__data-info">azrulkimi00@gmail.com</span>
        </div>

        <div class="contact__data">
          <span class="contact__data-title">LinkedIn Profile</span>
          <span class="contact__data-info">Azrul Hakimi</span>

          <a href="https://www.linkedin.com/in/azrul-hakimi-75a32420a/"  target="_blank" class="contact__button">
            Send me a message <i class="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="contact__content">
      <h3 class="contact__title">
        <i class="ri-send-plane-line"></i>Write me
      </h3>

      <form action="" class="contact__form" id="contact-form" @submit.prevent="sendEmail">
        <div class="contact__form-div">
          <label for="contact-name" class="contact__form-tag">Names</label>
          <input v-model="contactName" type="text" name="user_name" required placeholder="Write your name"  class="contact__form-input" id="contact-name">
        </div>

        <div class="contact__form-div">
          <label for="contact-email" class="contact__form-tag">Mail</label>
          <input v-model="contactEmail" type="email" name="user_email" required placeholder="Write your email"  class="contact__form-input" id="contact-email">
        </div>

        <div class="contact__form-div contact__form-area">
          <label for="contact-project" class="contact__form-tag">Content</label>
          <textarea v-model="contactProject" name="user_project" placeholder="Email contents" id="contact-project" class="contact__form-input"></textarea>
        </div>

        <p class="contact__message" :class="{ 'color-red': showMessageError, 'color-blue': showMessageSuccess }">{{ message }}</p>

        <button type="submit" class="contact__button">
          Submit <i class="ri-arrow-right-up-line"></i>
        </button>
      </form>
    </div>
  </PageSection>
</template>

<script>
import PageSection from '../templates/PageSection.vue';

export default {
  components: { PageSection },
  data() {
    return {
      contactName: '',
      contactEmail: '',
      contactProject: '',
      showMessageError: false,
      showMessageSuccess: false,
      message: '',
    };
  },
  methods: {
    async sendEmail() {
      if (this.contactName === '' || this.contactEmail === '' || this.contactProject === '') {
        this.showMessageError = true;
        this.showMessageSuccess = false;
        this.message = 'Write all the input fields 📩';
      } else {
        this.showMessageError = false;
        this.showMessageSuccess = false;

        try {
          await emailjs.sendForm('service_nx7k3vf', 'template_odz16mo', '#contact-form', 'k5BkLOy7WtDX1bqQm');

          this.message = 'Message sent ✅';

          setTimeout(() => {
            this.message = '';
          }, 5000);

        } catch (error) {
          console.error('Error sending email:', error);
          this.showMessageError = true;
          this.message = 'Error sending email 🚫';

          setTimeout(() => {
            this.message = '';
          }, 5000);
        }

        // Clear form fields after submission
        this.contactName = '';
        this.contactEmail = '';
        this.contactProject = '';
      }
    },
  },
};
</script>

