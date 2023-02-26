import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to Contact</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.4148929420667!2d82.99165281552541!3d25.32385523276363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e09eda4a731%3A0xcbfed62a15634068!2sV-Mart!5e0!3m2!1sen!2sin!4v1677072434286!5m2!1sen!2sin"
        title="google map"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            className="contact-inputs"
            action="https://formspree.io/f/xayzoljr"
            method="POST"
          >
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              required
              autoComplete="off"
              // value="raisanjeet8896"
            />
            <input
              type="email"
              name="email"
              autoComplete="off"
              required
              placeholder="Enter Email"
              // value="raisanjeet8896@gmail.com"
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              autoComplete="off"
              placeholder="Enter your message"
              autoCapitalize="off"
              // value="me sanjeet hun"
              required
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          color: #fff;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
export default Contact;
