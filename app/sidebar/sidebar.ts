export class SideBar{
    menuname : string;
    menuicon : string;
    menulink : string;
    menuaction : Boolean;
    constructor(menuname : string, menuicon : string, menulink : string, menuaction : Boolean){
        this.menuname = menuname;
        this.menuicon = menuicon;
        this.menulink = menulink;
        this.menuaction = menuaction;
    }
}