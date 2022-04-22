<?php

class UsedCar
{

    public function __construct(

        public string $url,
        public string $manufacturer,
        public string $model,
        public string $reg,
        public string $year,
        public string $price,
        public string $image,

    ) {
    }

    public function toProp(): string
    {
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
