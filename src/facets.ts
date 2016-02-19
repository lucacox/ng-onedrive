
export class Facet {
  constructor(data: Object) {
    for (let key in data) {
      if (data[key] !== undefined)
        this[key] = data[key];
    }
  }
}

export class Folder extends Facet{
  fileCount: number;

  constructor(data: any) {
    super(data);
  }
}

export class File extends Facet {
  hashes: {crc32Hash: string, sha1Hash: string}
  mimeType: string;

  constructor(data: any) {
    super(data);
  }
}

export class FileSystemInfo extends Facet {
  createdDateTime: Date;
  lastModifiedDateTime: Date

  constructor(data: any) {
    super(data);

    this.createdDateTime = new Date(data.createdDateTime);
    this.lastModifiedDateTime = new Date(data.lastModifiedDateTime);
  }
}

export class Image extends Facet {
  constructor(data: any) {
    super(data);
  }
}

export class Photo extends Facet {
  takenDateTime: Date

  constructor(data: any) {
    super(data);
    this.takenDateTime = new Date(data.takenDateTime);
  }
}

export class Video extends Facet {
  bitrate: number;
  duration: number;
  height:  number;
  width: number;

  constructor(data: any) {
    super(data);
  }
}

export class Location extends Facet {
  altitude: number;
  latitude: number;
  longitude: number;

  constructor(data: any) {
    super(data);

  }
}

export class Remote extends Facet {
  constructor(data: any) {
    super(data);

  }
}

export class SearchResult extends Facet {
  constructor(data: any) {
    super(data);

  }
}

export class Deleted extends Facet {
  constructor(data: any) {
    super(data);

  }
}

export class SpecialFolder extends Facet {
  constructor(data: any) {
    super(data);

  }
}

export class Quota extends Facet {
  total: number;
  used: number;
  remaining: number;
  deleted: number;
  state: string; // "normal | nearing | critical | exceeded"

  constructor(data: any) {
    super(data);
  }
}

export class Shared extends Facet {
  constructor(data: any) {
    super(data);

  }
}
