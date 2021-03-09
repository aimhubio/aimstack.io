import styles from '../styles/NewsletterSubscriptionForm.module.css';

import React, { useEffect }  from "react";

function NewsletterSubscriptionForm() {
  useEffect(() => {
    window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';

    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

    window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

    window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

    window.translation = {
      common: {
        selectedList: '{quantity} list selected',
        selectedLists: '{quantity} lists selected'
      }
    };
  }, []);

  useScript('https://sibforms.com/forms/end-form/build/main.js');
  useScript('https://www.google.com/recaptcha/api.js?hl=en');

  return (
    <div>
      <div className={`${styles.sibForm} sib-form`}>
        <div className={styles.sibFormBG} />
        <div id="sib-form-container" className={`${styles.sibFormContainer} sib-form-container`}>
          <div id="error-message" className={`${styles.sibFormMessagePanel} sib-form-message-panel`}>
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                <path
                  d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"
                />
              </svg>
              <span className="sib-form-message-panel__inner-text">
                Your subscription could not be saved. Please try again.
              </span>
            </div>
          </div>
          <div id="success-message" className={`${styles.sibFormMessagePanel} sib-form-message-panel`}>
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                <path
                  d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
                />
              </svg>
              <span className="sib-form-message-panel__inner-text">
                Your subscription has been successful.
              </span>
            </div>
          </div>
          <div id="sib-container" className={`${styles.sibContainer} sib-container--large sib-container--vertical`}>
            <form
              id="sib-form"
              method="POST"
              action="https://bcc8d9d1.sibforms.com/serve/MUIEAMO5ggD0F065O8DT968bz9_VEpIejRAOK-rG9JmWrLnWg8-bWjOysm2gunvuiQ3appnnCZ0BHjg6Qk7TAXRBNt1-RdE3GZ4iqk2zve-iEwQdTHPWedcDRXZ6du07ViTpGDuYnpqRDVK5mhd8h9Ujevy3mYs_nGlvv33-PHuqeROWb9FRYOwS2MY4nbq5llpZgi9qQb8mvYXz"
              dataType="subscription"
            >
              <div>
                <div className={`${styles.sibFormBlock} ${styles.sibFormHeaderBlock} sib-form-block`}>
                  <p className={`${styles.sigFormHeader} ${styles.TextLG}`}>Aim Newsletter</p>
                </div>
              </div>
              <div>
                <div className={`${styles.sibFormBlock} sib-form-block`}>
                  <div className="sib-text-form-block">
                    <p className={`${styles.TextMD} ${styles.sibFormText}`}>
                      Subscribe to our newsletter to receive regular updates about our latest releases, tutorials and
                      blog posts!
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className={`${styles.sibFormBlock} sib-input sib-form-block`}>
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <label
                        className="entry__label"
                        htmlFor="EMAIL"
                        data-required="*"
                      >
                        Enter your email address to subscribe
                      </label>
                      <div className="entry__field">
                        <input className="input" type="text" id="EMAIL" name="EMAIL" autoComplete="off"
                               placeholder="EMAIL" data-required="true" required/>
                      </div>
                    </div>
                    <label className="entry__error entry__error--primary"/>
                  </div>
                </div>
              </div>
              <div>
                <div className={`${styles.sibFormBlock} sib-captcha sib-form-block`}>
                  <div className="form__entry entry_block">
                    <div className="form__label-row ">
                      <script dangerouslySetInnerHTML={{
                        __html: `function handleCaptchaResponse() {
                          var event = new Event('captchaChange');
                          document.getElementById('sib-captcha').dispatchEvent(event);
                        }`
                      }} />
                      <div
                        className={`${styles.gaCaptcha} g-recaptcha sib-visible-recaptcha`}
                        id="sib-captcha"
                        data-sitekey="6Lf5u3gaAAAAAL04XQGtRctgFKJYimgAors9uppX"
                        data-callback="handleCaptchaResponse" />
                    </div>
                    <label className="entry__error entry__error--primary"/>
                  </div>
                </div>
              </div>
              <div>
                <div className={`${styles.sibFormBlock} ${styles.sibFormSubmitBlock} sib-form-block`}>
                  <button
                    className={`${styles.TextLG} ${styles.sibFormSubmit}`}
                    type="submit"
                  >
                    <svg
                      className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                      viewBox="0 0 512 512"
                      style={{
                        display: 'none',
                      }}
                    >
                      <path
                        d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                      />
                    </svg>
                    > Subscribe
                  </button>
                </div>
              </div>

              <input type="text" name="email_address_check" value="" className="input--hidden" />
              <input type="hidden" name="locale" value="en" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const useScript = (url) => {
    useEffect(() => {
      const script = document.createElement('script');

      script.src = url;
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };

export default NewsletterSubscriptionForm;