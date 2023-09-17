import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className="container">
      <img src="https://heroic-pixie-6d7f91.netlify.app/awning.png"/>
      <body>
        <h1>Food Truck Favorites</h1>
      </body>
      <Card image="https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg" title ="Birria-Landia" genre="Mexican" link="https://thebirrialandia.com/menu/" />
      <Card image="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42" title="Mysttik Masaala" genre="Indian" link="https://indianfoodny.com/" />
      <Card image="https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024" title="The Halal Guys" genre="Middle Eastern" link="https://thehalalguys.com/menu/" />
      <Card image="https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg" title="NY Dosas" genre="Vegetarian" link="https://nydosas.com/menu/"/>
      <Card image="https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg" title="Jerk Pan" genre="Jamaican" link="https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/" />
      <Card image="https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg" title="Tong" genre="Bangladeshi" link="https://www.facebook.com/Bangladeshistreetfoods/" />
      <Card image="https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg" title="King Souvlaki of Astoria" genre="Greek" link="https://kingsouvlakinyc.com/" />
      <Card image="https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg" title="Ling's Sweet Mini Cakes" genre="Chinese" link="https://canalstreet.market/" />
      <Card image="https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg" title="Uncle Gussy's" genre="Greek" link="https://unclegussys.com/menus/" />
      <Card image="https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg" title="Patacon Pisao" genre="Venezuelan" link="https://unclegussys.com/menus/" />
      <Card image="https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png" title="Mom's Mono" genre="Tibetan" link="https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/" />
      <Card image="https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg" title="Makina Cafe" genre="Ethiopian" link="https://makinacafenyc.com/" />
    </div>
  );
}

export default App;