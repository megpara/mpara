import { useState } from 'react';
import { decode } from 'html-entities';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const NewsletterForm = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
     return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
     return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode( formattedMessage ) : null;
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white gap-4">
    <div className="font-display text-4xl">Join our mailing list</div>
    <div className="text-sm text-[#bab5b1]">Sign up to Empara's newsletter to stay up to date on class, shows, and more</div>
      <div className="d-flex newsletter-input-fields flex items-center">
        <div className="mc-field-group">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your email"
            className="mr-4 bg-white text-black p-4"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button bg-white text-black p-4">
          <button className="wp-block-button__link font-medium text-sm" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="newsletter-form-info text-[12px] italic text-[#bab5b1]">
        {status === "error" || error ? (
          <div
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {status === "success" && status !== "error" && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
    </div>
  );
}

const NewsletterSubscribe = () => {

    const MAILCHIMP_URL = "https://emparadance.us22.list-manage.com/subscribe/post?u=2eb0a1c7eee3d1512a8c83d89&amp;id=362dfaedef&amp;f_id=00edc3e1f0";
  
    return (
      <MailchimpSubscribe
        url={ MAILCHIMP_URL }
        render={ ( props ) => {
          const { subscribe, status, message } = props || {};
          console.log("status" + status);
          return (
            <NewsletterForm
              status={ status }
              message={ message }
              onValidated={formData => subscribe(formData)}
            />
          );
        } }
      />
    );
  };
  
  export default NewsletterSubscribe;
  