<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;


return [
    'up' => function (Builder $schema) {
        if (!$schema->hasColumn('users', 'nickname')) {
            $schema->table('users', function (Blueprint $table) {
                $table->string('nickname', 30)->after('username');
            });
        }
    }
];
