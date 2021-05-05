import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class HeaderService {

  constructor(private route: ActivatedRoute) { }

  logHeaderText() {
    console.log("Some header 2");
    console.log(this.route.snapshot.params);
  }
}
