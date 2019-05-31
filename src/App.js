import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import HeaderCard from './header-card';
import Content from './content';
import Footer from './footer';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header_items: [
        {
          title: 'گردشگری',
          sub_headers: [
            {
              title: 'هیجانی و ماجراجویانه',
            },
            {
              title: 'اماکن تاریخی',
            },
            { 
              title: 'اماکن اسرار آمیز' 
            },
            { 
              title: 'مراکز خرید' 
            },
            { 
              title: 'میراث جهانی یونسکو' 
            },
            { 
              title: 'بوم گردی' 
            },
            { 
              title: 'اماکن مقدس' 
            },
            { 
              title: 'رستوران' 
            },
            { 
              title: 'اقامت' 
            },
            { 
              title: 'تفریحات ورزشی' 
            },
            { 
              title: 'برترین ها' 
            },
          ],
        },
        {
          title: 'طبیعت گردی',
          sub_headers: [
            {
              title: 'آبشار',
            },
            {
              title: 'دریاچه',
            },
            { 
              title: 'کوهستان' 
            },
            { 
              title: 'جنگل' 
            },
            { 
              title: 'ییلاقات' 
            },
            { 
              title: 'چشمه آب گرم و معدنی' 
            },
            { 
              title: 'دشت و بیاباتن' 
            },
            { 
              title: 'غار' 
            },
            { 
              title: 'ساحل و جزیره' 
            },
            { 
              title: 'پارک' 
            },
          ],
        },
        {
          title: 'ایران گردی',
          sub_headers: [
            {
              title: 'طبیعت ایران',
            },
            {
              title: 'تاریخ ایران',
            },
            { 
              title: 'فرهنگ ایران' 
            },
            { 
              title: 'تهرانگردی' 
            },
            { 
              title: 'سوغات و صنایع دستی' 
            },
            { 
              title: 'غذاهای ایرانی' 
            },
            { 
              title: 'روستاهای ایران ' 
            },
            { 
              title: 'موزه های ایران' 
            },
            { 
              title: 'گزارش کارناوال' 
            },
            { 
              title: 'ایران از نگاه گردشگران خارجی' 
            },
          ],
        },
        {
          title: 'جهان گردی',
          sub_headers: [
            {
              title: 'آسیا',
            },
            {
              title: 'آمریکا',
            },
            { 
              title: 'اروپا' 
            },
            { 
              title: 'آفریقا' 
            },
            { 
              title: 'اقیانوسیه' 
            },
          ],
        },
        {
          title: 'راهنمای سفر',
          sub_headers: [
            {
              title: 'راهنمای جامع سفر',
            },
            {
              title: 'معرفی شهر های توریستی',
            },
            { 
              title: 'برنامه سفر' 
            },
            { 
              title: 'هزینه های سفر' 
            },
            { 
              title: 'نکات ضرروری صفر' 
            },
            { 
              title: 'راهنمای اخذ ویزا از سفارت ها' 
            },
            { 
              title: 'قوانین فرودگاهی' 
            },
          ],
        },
        {
          title: 'فصل سفر',
          sub_headers: [
            {
              title: 'چهار فصل',
            },
            {
              title: 'بهار',
            },
            { 
              title: 'تابستان' 
            },
            { 
              title: 'پاییز' 
            },
            { 
              title: 'زمستان' 
            },
          ],
        },
        {
          title: 'فرهنگ ملل',
          sub_headers: [
            {
              title: 'جشنواره های جهانی',
            },
            {
              title: 'مردم شناسی و آداب و رسوم',
            },
            { 
              title: 'سوغات ملل' 
            },
            { 
              title: 'خوشمزه های جهان' 
            },
            { 
              title: 'هنر و موسیقی اقوام و ملل' 
            },
          ],
        },
        {
          title: 'عصر نوین',
          sub_headers: [
            {
              title: 'سفرهای فضایی',
            },
            {
              title: 'محیط زیست',
            },
            { 
              title: 'تکنولوژی در گردشگری' 
            },
          ],
        },
        {
          title: 'آموزش',
          sub_headers: [
            {
              title: 'مقالات آموزشی',
            },
            {
              title: 'مهاجرت',
            },
            { 
              title: 'آموزش عکاسی' 
            },
            { 
              title: 'دانشناامه گردشگری' 
            },
            { 
              title: 'مشاهیر گردشگری' 
            },
          ],
        },
        {
          title: 'نیم نگاه',
          sub_headers: [
            {
              title: 'عکاسی در سفر',
            },
            {
              title: 'جالب انگیز',
            },
            { 
              title: 'عکس روز نشنال جيوگرافیک' 
            },
            { 
              title: 'حیات وحش' 
            },
            { 
              title: 'نگاهی به تاریخ' 
            },
            { 
              title: 'گنجینه تاریخ' 
            },
            { 
              title: 'معماری' 
            },
            { 
              title: 'صدای زندگی' 
            },
            { 
              title: 'رویدادها' 
            },
            { 
              title: 'گردشگری در گینس' 
            },
            { 
              title: 'اخبار گردشگری' 
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <Header header_items={this.state.header_items} />
          <HeaderCard />
          <Content />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
