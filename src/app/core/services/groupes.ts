import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Groupes} from "../models/groupes.model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root',
})

export class GroupesService {

  private firestorePath = '/Groupes';

  groupesRef: AngularFirestoreCollection<Groupes>;
  groupe: Observable<any[]>;


  constructor(private db: AngularFirestore, private router: Router) {

    this.groupesRef = db.collection(this.firestorePath);
    this.groupe = this.groupesRef.valueChanges();

  }

  getAll(): AngularFirestoreCollection<Groupes>{
    return this.groupesRef;
  }

  getById(id: string | undefined): Observable<any> {
    return this.groupesRef.doc(id).get();
  }

}
