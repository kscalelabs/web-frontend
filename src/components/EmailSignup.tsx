import React from "react";

const EmailSignup = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid py-16">
      <div className="col-span-full sm:col-span-4 sm:col-start-2 md:col-span-5 md:col-start-2 lg:col-span-4 lg:col-start-2 2xl:col-span-5 2xl:col-start-2">
        <div id="mc_embed_signup">
          <form
            action="https://dev.us22.list-manage.com/subscribe/post?u=a090115c9a76e96d327360f7d&amp;id=8a6ee81bb8&amp;f_id=00c3dce1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <h2 className="text-heading-sm mb-4">Stay Updated</h2>
              <div className="mc-field-group">
                <input
                  type="email"
                  name="EMAIL"
                  className="required email px-4 py-2 rounded-md bg-background border border-foreground/20"
                  id="mce-EMAIL"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                <input
                  type="text"
                  name="b_a090115c9a76e96d327360f7d_8a6ee81bb8"
                  tabIndex={-1}
                  value=""
                />
              </div>
              <div className="clear mt-4">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button bg-foreground text-background px-6 py-2 rounded-md cursor-pointer hover:opacity-90"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup; 