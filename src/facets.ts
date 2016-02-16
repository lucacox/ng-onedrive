
export class Folder {
  constructor(data: any) {

  }
}

export class File {

}

export class FileSystemInfo {

  constructor(data: any) {

  }
}

export class Image {

}

export class Photo {

}

export class Video {

}

export class Location {

}

export class Remote {

}

export class SearchResult {

}

export class Deleted {

}

export class SpecialFolder {
  constructor(data: any) {

  } 
}

export class Quota {
  total: number;
  used: number;
  remaining: number;
  deleted: number;
  state: string; // "normal | nearing | critical | exceeded"

  constructor(data: any) {
    this.total = data.total;
    this.used = data.used;
    this.remaining = data.remaining;
    this.deleted = data.deleted;
    this.state = data.state;
  }
}

export class Shared {

}
