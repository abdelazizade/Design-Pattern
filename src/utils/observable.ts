import { observable } from "../componnts/utils";

export type Observer<TData> = (data: TData) => void;

export class Observable<TData> {
  private observers: Observer<TData>[] = [];

  subscribe(observerFn: Observer<TData>) {
    this.observers.push(observerFn);
    return () => {
      this.observers = this.observers.filter((o) => o !== observerFn);
    };
  }

  // unSubscribe(observer: Observer<TData>) {
  //   this.observers = this.observers.filter((obj) => obj !== observer);
  // }

  notify(data: TData) {
    this.observers.forEach((observer) => observer(data));
  }
}
type Event = "iphone" | "android";

const observable = new Observable<Event>();

observable.subscribe((data) => console.log(` one ${data}`));
observable.subscribe((data) => console.log(` one ${data}`));

observable.notify("android");
