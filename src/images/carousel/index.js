import media1 from "./BannerBlack.png";
import media2 from "./BannerInfor.png";
import media3 from "./BannerEsct.png";
import media4 from "./BannerLivro.png";
import media5 from "./BannerSuper.png";
import media6 from "./BannerCad.png";


export const media = [media1,
media2=[{ href:"./computing"}],
  media3=[{ href:"./office"}],
   media4=[{ href:"./bookstore"}],
    media5,
     media6=[{ href:"./Registration"}]];
export const mediaByIndex = index => media[index % media.length];