import emailjs from '@emailjs/browser';

document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('5NN6Q1Wan-mVgOZKy');

  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      message: formData.get('message'),
      time: new Date().toLocaleString()
    };

    emailjs.send('service_y3y32i4', 'template_s69nkzc', templateParams)
      .then(() => {
        alert('Message sent successfully!');
        form.reset();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        alert('Failed to send message. Please try again.');
      });
  });
});
