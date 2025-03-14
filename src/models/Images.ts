class Images{
    idImage: number;
  imageName?: string;
  laIcon?: boolean;
  imagePath?: string;
  imageData?: string;
  constructor(
    idImage: number,
  imageName?: string,
  laIcon?: boolean,
  imagePath?: string,
  imageData?: string,
  ){
    this.idImage=idImage;
    this.imageName=imageName;
    this.laIcon =laIcon;
    this.imagePath = imagePath;
    this.imageData= imageData;
  }

}
export default Images;
