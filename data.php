<?php
// refactor : https://stitcher.io/blog/constructor-promotion-in-php-8
// refactor https://www.phptutorial.net/php-tutorial/php-named-arguments/

class UsedCar {

    public $url;
    public $manufacturer;
    public $model;
    public $reg;
    public $year;
    public $price;
    public $image;

    public function __construct($url, $manufacturer, $model, $reg, $year, $price, $image) {
        $this->url = $url;
        $this->manufacturer = $manufacturer;
        $this->model = $model;
        $this->reg = $reg;
        $this->year = $year;
        $this->price = $price;
        $this->image = $image;
    }

    public function toProp() {
        $str = "{
            url : '$this->url',
            manufacturer : '$this->manufacturer',
            model : '$this->model',
            reg : '$this->reg',
            year : '$this->year',
            price : '$this->price',
            image : '$this->image',
            }";
        return $str;
    }
}

$carOne = new UsedCar('https://alpinejs.dev/alpine_long.svg', 'VW', 'Camper', 'ABC123', '2020', '$1,000,000', 'https://ev-database.org/img/auto/Honda_e/Honda_e-01@2x.jpg');
$carTwo = new UsedCar('https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d', 'Ford', 'Fiesta', 'DF919lR', '1999', '$17,000', 'https://ev-database.org/img/auto/Honda_e/Honda_e-01@2x.jpg');
