<?php

namespace Simonxeko\NickName\Changer\Validators;

use Flarum\Foundation\AbstractValidator;

class NickNameValidator extends AbstractValidator
{
    protected $rules = [
        'nickname' => [
            'regex:/^([[:alnum:]]{2,}[\r\n\t\f\v ]{0,1})+$/iu',
            'unique:users,nickname',
            'unique:users,username',
            'min:2',
            'max:30',
        ],
    ];
}
