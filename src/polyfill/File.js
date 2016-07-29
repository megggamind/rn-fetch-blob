// Copyright 2016 wkh237@github. All rights reserved.
// Use of this source code is governed by a MIT-style license that can be
// found in the LICENSE file.

import fs from '../fs.js'
import Blob from './Blob.js'

export default class File extends Blob {

  name : string = '';

  constructor(data:any , cType:string) {
    super(data, cType)
  }

}