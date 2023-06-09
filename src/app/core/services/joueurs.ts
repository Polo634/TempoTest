import {Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Joueurs} from "../models/joueurs.model";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root',
})

export class JoueursService {

  private firestorePath = '/players';

  joueursRef: AngularFirestoreCollection<Joueurs>;
  joueur: Observable<any[]>;

  joueurs!: Observable<Joueurs[]>;

  constructor(private db: AngularFirestore) {

    this.joueursRef = db.collection(this.firestorePath);
    this.joueur = this.joueursRef.valueChanges();
    this.joueurs = this.joueursRef.valueChanges();

  }

  getAll(): AngularFirestoreCollection<Joueurs>{
    return this.joueursRef;
  }

  getById(id: string | undefined): Observable<any> {
    return this.joueursRef.doc(id).get();
  }

   create(joueur: Joueurs): any {
    return this.joueursRef.add({...joueur});
  }

  update(id: string | undefined, data: any): Promise<void> {
    return this.joueursRef.doc(id).update(data);
  }

  delete(id:string):Promise<void> {
    return this.joueursRef.doc(id).delete();
  }



}
