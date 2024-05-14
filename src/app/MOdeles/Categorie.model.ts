export interface Categorie{

    categorieId: string,
    nameCategorie:string,

    isActive: boolean

}
export interface AddCategorie{

  nameCategorie:string,
  parentId:string|null,
  isActive: boolean

}
