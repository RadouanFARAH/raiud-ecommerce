import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ParametresService {

  Url = environment.url;
  constructor(private storage: StorageService, public http: HttpClient) {}
   getVendeur_dashboard(data:any){
    return this.http.post(this.Url + "/vendeur_dashboard", data)
   }
   sellerGainFromClientToday(data:any){
    return this.http.post(this.Url + "/vendeur_dashboard/sellerGainFromClientToday", data)
   }
   getAppCost(){
    return this.http.get(this.Url + "/user/getAppCost")
   }
   getPercent(){
    return this.http.get(this.Url + "/user/getPercent")
   }
   getDelivery(data:any){
    return this.http.post(this.Url + "/user/getDelivery",data)
   }
   getDeliveryParams(){
    return this.http.get(this.Url + "/user/getDeliveryParams")
   }
   getUrls(data:any){
    return this.http.post(this.Url + "/product/getProductImagesURL", data)
   }
   deleteFiles(data:any){
    return this.http.post(this.Url + "/product/deleteFiles", data)
   }
   setGoal(data:any){
    return this.http.post(this.Url + "/user/setGoal", data)
   }
   getOrderDetails(data:any){
    return this.http.post(this.Url + "/orders/getOrderDetails", data)
   }
   getconsovalide(data:any){
    return this.http.post(this.Url + "/vendeur_dashboard/consoValide",data)
   }
   updateSpecial(data:any){
    return this.http.post(this.Url + "/product/updateSpecial", data)

   }
   updatePoint(data:any){
    return this.http.post(this.Url + "/product/updatePoint", data)

   }
   getconsoAttente(){
    return this.http.get(this.Url + "/vendeur_dashboard/consoAttente")
   }
   consoRefuse(){
    return this.http.get(this.Url + "/vendeur_dashboard/consoRefuse")
   }
   getConsoGlobalByQuartier(quartier:any){
    return this.http.post(this.Url + "/vendeur_dashboard/getConsoGlobalByQuartier", {idquartier:quartier})
   }
   getconsoGlobal(){
    return this.http.get(this.Url + "/vendeur_dashboard/getConsoGlobal")
   }
   sendMofitRejectOreder(data:any){
    return this.http.post(this.Url + "/vendeur_dashboard/sendMofitRejectOreder", data)
   }
  getCategories() {
    return this.http.get(this.Url + "/category" + "/getCategories")
  }
  specialOrders(){
    return this.http.get(this.Url + "/product" + "/specialOrders")
  }
  getAllCategories() {
    return this.http.get(this.Url + "/category" + "/getAllCategories")
  }

  getProductByCategory(id:any,special:any) {
    return this.http.post(this.Url + "/product" + "/getProductByCategory", { id, special })
  }
  getProductByCategoryNameOnly(id:any,special:any) {
    return this.http.post(this.Url + "/product" + "/getProductByCategoryNameOnly", { id, special })
  }
  setProduct(data:any) {
    return this.http.post(this.Url + "/product" + "/putProduct", data)
  }
  updateProduct(data:any) {
    return this.http.post(this.Url + "/product" + "/updateProduct", data)
  }
  setProductImage(formData:any){
    return this.http.post(this.Url + "/product" + "/putProductImage", formData)
  }
  setProfileImage(formData:any){
    return this.http.post(this.Url + "/product" + "/setProfileImage", formData)
  }
  getHistoryOrdersConso(data:any) {
    return this.http.post(this.Url + "/orders" + "/getOrdersConsommateur", data)
  }

  
  // for authentification
  async getToken() {
    return await this.storage.get('token');


    /*
    let role = await this.storage.get("role")
    if (role == "C") {
      return await this.storage.get('tokenC')
    } else if (role == "V") {
      return await this.storage.get('tokenV')
    } else if (role == "R") {
      return await this.storage.get('tokenR')
    } else if (role == "D") {
      return await this.storage.get('tokenD')
    }else{
      return await this.storage.get('token')
    }
    */
    
  }


}
