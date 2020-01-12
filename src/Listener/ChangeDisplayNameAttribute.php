<?php

namespace Simonxeko\NickName\Changer\Listener;

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\User\Event\GetDisplayName;

class ChangeDisplayNameAttribute
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetDisplayName::class, function ($user) {
            $user_found = $user->user->findOrFail($user->user->id);
            $display_name = $user_found->nickname;
            if ($display_name != '') {
                $display_name = $user_found->username.' ('.$display_name.')';
            } else {
                $display_name = $user_found->username;
            }
            return $display_name;
        });
    }
}
