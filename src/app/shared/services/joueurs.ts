import {Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Joueurs} from "../../models/joueurs.model";
import {map, Observable} from "rxjs";
import firebase from "firebase/compat";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root',
})

export class JoueursService {

  private firestorePath = '/players';

  joueursRef: AngularFirestoreCollection<Joueurs>;
  joueur: Observable<any[]>;


  constructor(private db: AngularFirestore, private router: Router) {

    this.joueursRef = db.collection(this.firestorePath);
    this.joueur = this.joueursRef.valueChanges();

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
