import media1 from "./BannerBlack.png";
import media2 from "./BannerInfor.png";
import media3 from "./BannerEsct.png";
import media4 from "./BannerLivro.png";
import media5 from "./BannerSuper.png";
import media6 from "./BannerCad.png";


export const media = [media1,
media2,
  media3,
   media4,
    media5,
     media6];
export const mediaByIndex = index => media[index % media.length];