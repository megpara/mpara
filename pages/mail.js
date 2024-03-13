import Head from "next/head";
import Layout from "../components/Layout";

export default function Mail() {
    return (
        <Layout>
            <Head>
                <title>Mail</title>
            </Head>
            <div id="mc_embed_shell" className="text-[#bab5b1] lowercase italic flex flex-col items-center justify-center w-full h-screen">
            <div id="mc_embed_signup" className="w-1/2">
                <form action="https://emparadance.us22.list-manage.com/subscribe/post?u=2eb0a1c7eee3d1512a8c83d89&amp;id=362dfaedef&amp;f_id=00edc3e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                    <div id="mc_embed_signup_scroll">
                    <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                    <div class="mc-field-group">
                        <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
                        <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="" />
                    </div>
                    <div class="mc-field-group">
                        <label for="mce-FNAME">First Name </label>
                        <input type="text" name="FNAME" class=" text" id="mce-FNAME" value="" />
                    </div>
                    <div class="mc-field-group">
                        <label for="mce-LNAME">Last Name </label>
                        <input type="text" name="LNAME" class=" text" id="mce-LNAME" value="" />
                    </div>
                    <div id="mce-responses" class="clear">
                        <div class="response" id="mce-error-response" className="invisible"></div>
                        <div class="response" id="mce-success-response" className="invisible"></div>
                    </div>
                    <div aria-hidden="true" className="absolute left-[-5000px]">
                        <input type="text" name="b_2eb0a1c7eee3d1512a8c83d89_362dfaedef" tabindex="-1" value="" />
                    </div>
                    <div class="clear">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe" />
                    </div>
                </div>
            </form>
            </div>
            {/* <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script> */}
            </div>
        </Layout>
    )
}