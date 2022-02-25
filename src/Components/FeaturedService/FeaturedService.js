import React from 'react';
import featuredImg from '../../images/featured.png'
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featuredImg} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Request an Appointment</h1>
                        <p className="text-secondary my-5">
                            টেলি-হেলথকেয়ার এ শুধুমাত্র প্রয়োজনীয় পরামর্শ সেবা ও সাধারণ প্রেসক্রিপশন দেয়া হয়। <br />৪ টি উপায়ে টেলি-হেলথকেয়ার থেকে প্রয়োজনীয় পরামর্শ সেবা দেয়া হয়। <br />১.সরাসরি লাইভ চ্যাট। <br />২.রোগ নির্ণয় (চর্ম, হার্ট ডিজিজ, পারকিন্সন ডিজিজ,ডায়াবেটিস)। <br />৩.ইমেইল এর মাধ্যমে (telehealth.care@gmail.com) <br />৪.সরাসরি কথা বলার মাধ্যমে (16263) <br />অনলাইন এ লাইভ ভিডিও চ্যাট এর মাধ্যমে (skype: Tele-Health , Facebook: fb.com/telehealth, Imo/Viber: 01761926292) <br />পরামর্শ সেবা নির্ভর করে রোগীর তার রোগের বিস্তারিত বর্ণনার ওপর। রোগী যদি কোন কারনে সঠিকভাবে তার সমস্যা বর্ণনা করতে না পারেন তবে সেক্ষেত্রে যথাযথ পরামর্শ না পাওয়ার ক্ষেত্রে ডাক্তার কোনভাবেই দায়ী থাকবে না।প্রতিটি প্রশ্ন সাবমিট করার ১ থেকে ২৪ ঘণ্টার মধ্যে অভিজ্ঞ ডাক্তারের কাছে থেকে উত্তর পেয়ে যাবেন ।
                        </p>
                        <button className="btn btn-primary">যোগাযোগ</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;