var order = [];
//UI
$(document).ready(
    function () {
        $(".salepreview").hide();
        $(".cart").text(order.length);
        $(".cartitems").hide();
        $(".cover").hide();
        $(".pay").hide();
        $(".cover").click(
            function () {
                $(".cartitems").fadeOut();
                $(".cover").fadeOut();
            }
        );
        $("#exit").click(
            function () {
                $(".cartitems").fadeOut();
                $(".cover").fadeOut();
            }
        );
        $(".cart").click(
            function () {

                $(".cartitems").fadeIn();
                $(".cover").fadeIn();
                $("#cartitems").text("");
                if (order.length < 1) {

                    $("#cartitems").append('<div class="card itemdiv"><div class="ccontent">' +
                        '<h2>Oops The cart is empty<h2>' + '</div></div>');
                }
                else if (order.length > 0) {
                    $('#cartitems').text('');

                    for (let i = 0; i < order.length; i++) {
                        $("#cartitems").append('<div class="card itemdiv" id=' + order[i].id + i + "b" + '>' +
                            '<div class="row"><div class="col-3 hcontent">Name:</div><div class="col-3 hcontent">Price:</div><div class="col-3"></div><div class="col-2">' +
                            '<div class="col-3 btn btn-danger justify-end" click=me(' + order[i].id + ') id=' + order[i].id + '>X</div></div></div><div class="row"><div class="col-3">' + order[i].name + '</div><div class="col-3">' + order[i].price + ' KSh/ bale</div><div class="col-3"></div></div></div>');
                        let a = (order[i].id) + i + "b";
                        let b = i;
                        me(a, b);
                    }
                    function me(id, i) {
                        $("#" + id).click(function () {
                            $(this).hide();
                            rem(order, i)
                        });
                    }
                    function rem(ar, i) {
                        ar.splice(ar[i], 1);
                        $("#cart").text(ar.length);
                        console.log(ar);
                    }
                }
            }
        );
        $("#check").click(
            function () {
                $(".pay").fadeIn()
                $("#items").text('');
                $('#total').text('');
              
                for(let i=0;i<order.length;i++){
                $("#items").append('<tr><th scope="row">'+i+'</th><td>'+order[i].name+'</td><td><input type="text"></td><td>'+order[i].price+'</td></tr>');
            };
            $("#total").append('<tr><th scope="row">Total</th><td></td><td></td><th>Ksh'+sum(order)+'</th></tr>');
        
        });
        function sum(ar){
            let total=0;
            for(let i=0;i<ar.length;i++){
                total=total+ar[i].price;

                /*for (let i = 0; i < order.length; i++) {
                    $("#items").append('<tr><th scope="row">' + i + '</th><td>' + order[i].name + '</td><td><input type="text"></td><td>' + order[i].price + '</td></tr>');
                };
                $("#total").append('<tr><th scope="row">Total</th><td></td><td></td><th>Ksh' + sum(order) + '</th></tr>');

            });
        function sum(ar) {
            let total = 0;
            for (let i = 0; i < ar.length; i++) {
                total = total + ar[i].price;*/

            }
            return total;
        }
        $("#cpay").click(
            function () {
                $(".pay").fadeOut();
            }
        );
        $("#male").click(function () {
            $(".salepreview").show();
            getItems(male);
            $("#phead").text('Male');
            for (let i = 0; i < show.length; i++) {
                $(".saleholder").append('<div class="card salecard">' +
                    '<div class="row"><div class="col-3 image">' +
                    '<img src="group-Images/' + show[i].image + '" alt="' + show[i].name + '" height="100%" width="100%">' +
                    '</div>' + '<div class="col-8 card info">' +
                    '<div class="card-body">Name:' + show[i].name + '<br/> Price:' + show[i].price + ' ' + ' per bale</div>' +
                    '<div class="card-footer ccontent">' +
                    '<div class="btn btn-primary" id=' + show[i].id + '>Order</div>' +
                    '</div></div></div></div>');
                $("#" + show[i].id).click(
                    function () {
                        order.push(show[i]);
                        $("#cart").text(order.length);
                    }
                );
            };

        });
        $("#female").click(function () {
            $(".salepreview").show();
            getItems(female);
            $("#phead").text('Female');
            for (let i = 0; i < show.length; i++) {
                $(".saleholder").append('<div class="card salecard">' +
                    '<div class="row"><div class="col-3 image">' +
                    '<img src="group-Images/' + show[i].image + '" alt="' + show[i].name + '" height="100%" width="100%">' +
                    '</div>' + '<div class="col-8 card info">' +
                    '<div class="card-body">Name:' + show[i].name + '<br/> Price:' + show[i].price + ' ' + ' per bale</div>' +
                    '<div class="card-footer ccontent">' +
                    '<div class="btn btn-primary" id=' + show[i].id + '>Order</div>' +
                    '</div></div></div></div>');
                $("#" + show[i].id).click(
                    function () {
                        order.push(show[i]);
                        $("#cart").text(order.length);
                    }
                );
            }
        });
        $("#kids").click(function () {
            $(".salepreview").show();
            getItems(kids);
            $("#phead").text('Kids');
            for (let i = 0; i < show.length; i++) {
                $(".saleholder").append('<div class="card salecard">' +
                    '<div class="row"><div class="col-3 image"><img src="group-Images/' + show[i].image + '" alt="' + show[i].name + '" height="100%" width="100%"></div>' + '<div class="col-8 card info">div class="card-body">Name:' + show[i].name + '<br/> Price:' + show[i].price + ' ' + ' per bale</div><div class="card-footer ccontent">' +
                    '<div class="btn btn-primary" id=' + show[i].id + '>Order</div>' +
                    '</div></div></div></div>');
                $("#" + show[i].id).click(
                    function () {
                        order.push(show[i]);
                        $("#cart").text(order.length);
                    }
                );
            }
        });
        $("#bags").click(function () {
            $(".salepreview").show();

            getItems(bags);
            $("#phead").text('Bags');
            for (let i = 0; i < show.length; i++) {
                $(".saleholder").append('<div class="card salecard">' +
                    '<div class="row"><div class="col-3 image">' +
                    '<img src="group-Images/' + show[i].image + '" alt="' + show[i].name + '" height="100%" width="100%">' +
                    '</div>' + '<div class="col-8 card info">' +
                    '<div class="card-body">Name:' + show[i].name + '<br/> Price:' + show[i].price + ' ' + ' per bale</div>' +
                    '<div class="card-footer ccontent">' +
                    '<div class="btn btn-primary" id=' + show[i].id + '>Order</div>' +
                    '</div></div></div></div>');
                $("#" + show[i].id).click(
                    function () {
                        order.push(show[i]);
                        $("#cart").text(order.length);
                    }
                );
            }
        });
        $("#atheisure").click(function () {
            $(".salepreview").show();
            getItems(athleisure);
            $("#phead").text('Athleisure');
            for (let i = 0; i < show.length; i++) {
                $(".saleholder").append('<div class="card salecard">' +
                    '<div class="row"><div class="col-3 image">' +
                    '<img src="group-Images/' + show[i].image + '" alt="' + show[i].name + '" height="100%" width="100%">' +
                    '</div>' + '<div class="col-8 card info">' +
                    '<div class="card-body">Name:' + show[i].name + '<br/> Price:' + show[i].price + ' ' + ' per bale</div>' +
                    '<div class="card-footer ccontent">' +
                    '<div class="btn btn-primary" id=' + show[i].id + '>Order</div>' +
                    '</div></div></div></div>');
                $("#" + show[i].id).click(
                    function () {
                        order.push(show[i]);
                        $("#cart").text(order.length);
                    }
                );
            }
        });
        $("#shoes").click(function () {
            $(".salepreview").show();
            getItems(shoes);
            $("#phead").text('Shoes');
            for (let i = 0; i < show.length; i++) {
                $(".saleholder").append('<div class="card salecard">' +
                    '<div class="row"><div class="col-3 image">' +
                    '<img src="group-Images/' + show[i].image + '" alt="' + show[i].name + '" height="100%" width="100%">' +
                    '</div>' + '<div class="col-8 card info">' +
                    '<div class="card-body">Name:' + show[i].name + '<br/> Price:' + show[i].price + ' ' + ' per bale</div>' +
                    '<div class="card-footer ccontent">' +
                    '<div class="btn btn-primary" id=' + show[i].id + '>Order</div>' +
                    '</div></div></div></div>');
                $("#" + show[i].id).click(
                    function () {
                        order.push(show[i]);
                        $("#cart").text(order.length);
                    }
                );
            };

        });
        $(".btn-danger").click(
            function () {
                $(".salepreview").fadeOut();
                $(".saleholder").text('');
                show = [];
            }

        );


    }
);
//BLOC section
function Item(name, price, image, id) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.id = id;
}
var female1 = new Item("skirts", 9000, "skirts.jpeg", "skirts");
var female2 = new Item("dress", 8500, "dress.jpeg", "dress");
var female3 = new Item("trouser", 8900, "trouser.jpeg", "trouser");
var female4 = new Item("top", 9500, "female.jpeg", "top");
var female = [female1, female2, female3, female4];

var male1 = new Item("short", 9000, "shorts.jpeg", "short");
var male2 = new Item("shirts", 8500, "shirts.jpeg", "shirt");
var male3 = new Item("trouser", 8900, "trouser.jpeg", "trouser");
var male4 = new Item("vest", 9500, "vests.jpg", "vest");

var male = [male1, male2, male3, male4];

var shoe1 = new Item("boots", 9000, "boots.jpg", "boots");
var shoe2 = new Item("sneakers", 8500, "sneakers.jpg", "sneakers");
var shoe3 = new Item("clogs", 8900, "clogs.jpg", "clogs");
var shoe4 = new Item("sandals", 9500, "sandals.png", "sandals");

var shoes = [shoe1, shoe2, shoe3, shoe4];

var bag1 = new Item("backpack", 9000, "backpack.jpg", "backpack");
var bag2 = new Item("beltbag", 8500, "beltbag.jpg", "beltbag");
var bag3 = new Item("leather", 8900, "leather.jpg", "leather");
var bag4 = new Item("satchel", 9500, "satchel.jpg", "satchel");

var bags = [bag1, bag2, bag3, bag4];

var athleisure1 = new Item("atheleisureshoes", 9000, "atheleisureshoes.jpeg", "atheleisureshoes");
var athleisure2 = new Item("suit", 8500, "suit.jpg", "suit");
var athleisure3 = new Item("athleisureshirt", 8900, "athleisureshirt.jpeg", "athleisureshirt");
var athleisure4 = new Item("athleisureshirt", 9500, "athleisureshirt.jpeg", "athleisureshirt");
var athleisure = [athleisure1, athleisure2, athleisure3, athleisure4];

var kids1 = new Item("dungaree", 9000, "dungaree.jpeg", "dungaree");
var kids2 = new Item("girltops", 8500, "girltops.jpeg", "girltops");
var kids3 = new Item("kiddress", 8900, "kiddress.jpg", "kiddress");
var kids4 = new Item("kidsshorts", 9500, "kidsshorts.jpg", "kidsshorts");
var kids = [kids1, kids2, kids3, kids4];
var show = [];


function getItems(arrayName) {
    clearShow();
    for (let i = 0; i < arrayName.length; i++) {
        show.push(arrayName[i]);
    }
}
function clearShow() {
    show = [];
    return show;
}
//function to add items to cart


