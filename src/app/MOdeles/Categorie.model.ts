export interface Categorie{

    categorieId: string,
    nameCategorie:string,

    isActive: boolean

}
export interface AddCategorie{

  nameCategorie:string,
  parent:Categorie|null,
  isActive: boolean

}
