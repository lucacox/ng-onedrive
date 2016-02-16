import * as Facets from './facets';


export class Drive {

  public static Personal = "personal";
  public static Business = "business";

  id: string;
  driveType: string;
  owner: IdentitySet;
  quota: Facets.Quota;

  constructor(data: any) {
    this.id = data.id;
    this.driveType = data.driveType;
    this.owner = new IdentitySet(data.owner);
    this.quota = new Facets.Quota(data.quota);
  }

  get childrens() {
    return "drives/" + this.id + "/root/children";
  }

  get root() {
    return "drives/" + this.id + "/root";
  }
}

export class ItemReference {
  constructor(data: any) {

  }
}

export class Identity {
  id: string;
  displayName: string;

  constructor(data: any) {
    this.id = data.id;
    this.displayName = data.displayName;
  }
}

export class IdentitySet {
  user: Identity;
  application: Identity;
  device: Identity;

  constructor(data: any) {
    this.user = new Identity(data.user);
    if (data.application)
      this.application = new Identity(data.application);
    if (data.device)
      this.device = new Identity(data.device);
  }
}

export class Item {
  id: string;
  name: string;
  eTag: string;
  cTag: string;
  createdBy: IdentitySet;
  createdDateTime: string; // timestamp
  lastModifiedBy: IdentitySet;
  lastModifiedDateTime: string;  // timestamp
  size: number; // max 1024
  webUrl: string; // url
  description: string;
  parentReference: ItemReference;
  // children: Array<Item>;
  folder: Facets.Folder;
  file: Facets.File;
  fileSystemInfo: Facets.FileSystemInfo;
  image: Facets.Image;
  photo: Facets.Photo;
  audio: Facets.Video;
  video: Facets.Video;
  location: Facets.Location;
  remoteItem: Facets.Remote;
  searchResult: Facets.SearchResult;
  deleted: Facets.Deleted;
  specialFolder: Facets.SpecialFolder;
  thumbnails: Array<ThumbnailSet>;
  shared: Facets.Shared;

  // name.conflictBehavior: string;
  // content.downloadUrl: url;
  // content.sourceUrl: url

  constructor(data: any) {
    if (data.cTag) this.cTag = data.cTag; //: "adDpBMkRGNDYyOUY0OUI3NTFEITEwNi42MzU4OTA0ODQ1MTE1MzAwMDA"
    if (data.createdBy) this.createdBy = new IdentitySet(data.createdBy); //: {user: {displayName: "Luca Cossaro", id: "a2df4629f49b751d",…}}
    if (data.createdDateTime) this.createdDateTime = data.createdDateTime; //: "2012-03-02T17:59:11.507Z"
    if (data.eTag) this.eTag = data.eTag; //: "aQTJERjQ2MjlGNDlCNzUxRCExMDYuMA"
    if (data.fileSystemInfo) this.fileSystemInfo = new Facets.FileSystemInfo(data.fileSystemInfo); //: {createdDateTime: "2012-03-02T17:59:11.507Z", lastModifiedDateTime: "2012-03-02T17:59:11.507Z"}
    if (data.folder) this.folder = new Facets.Folder(data.folder); //: {childCount: 52}
    if (data.id) this.id = data.id; //: "A2DF4629F49B751D!106"
    if (data.lastModifiedBy) this.lastModifiedBy = new IdentitySet(data.lastModifiedBy); //: {user: {displayName: "Luca Cossaro", id: "a2df4629f49b751d",…}}
    if (data.lastModifiedDateTime) this.lastModifiedDateTime = data.lastModifiedDateTime; //: "2016-01-22T08:34:11.153Z"
    if (data.name) this.name = data.name; //: "Documenti"
    if (data.parentReference) this.parentReference = new ItemReference(data.parentReference); //: {driveId: "a2df4629f49b751d", id: "A2DF4629F49B751D!103", path: "/drive/root:"}
    if (data.size) this.size = data.size; //: 770409237
    if (data.specialFolder) this.specialFolder = new Facets.SpecialFolder(data.specialFolder); //: {name: "documents"}
    if (data.webUrl) this.webUrl = data.webUrl; //: "https://onedrive.live.com/redir?resid=A2DF4629F49B751D!106"
  }

  get children() {
    if (this.folder)
      return "drive/items/" + this.id + "/children";

    return null;
  }
}


class Thumbnail {

}

class ThumbnailSet {

}