export class model
{
    user;
    items;

    constructor(){
        this.user = "Kurniawan";
        this.items=[
            { action:"Create SinglePage with AngularJS", done:true },
            { action:"Create SinglePage with VueJs", done:false },
            { action:"Create SinglePage with ReactJs", done:true },
            { action:"Layouting Laravel theme", done:false },
        ]
    }
}

export class TodoItem
{
    action;
    done;

    constructor(action,done)
    {
        this.action = action;
        this.done = done;
    }
}