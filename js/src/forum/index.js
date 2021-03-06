import { extend } from 'flarum/extend';
import app from 'flarum/app';
import SettingsPage from 'flarum/components/SettingsPage';
import extractText from 'flarum/utils/extractText';
import EditUserModal from 'flarum/components/EditUserModal';
import Button from 'flarum/components/Button';
import ChangeNickNameModal from './components/ChangeNickNameModal';

app.initializers.add('dem13n-nickname-changer', () => {

  extend(SettingsPage.prototype, 'accountItems', function (items) {
    this.displayname = m.prop(app.session.user.displayName());
    if (this.displayname() && this.displayname() != '') {
      let usernameLength = app.session.user.username().length;
      this.nickname = m.prop(this.displayname().substring(usernameLength + 2, this.displayname().length - 1));
    } else {
      this.nickname = m.prop('');
    }
    this.username = m.prop(app.session.user.username());
    items.add('ChangeNickName',
      Button.component({
        children: app.translator.trans('dem13n.forum.nickname.change'),
        className: 'Button',
        disabled: app.session.user.data.attributes.canPermanentNicknameChange !== true && !(app.forum.attribute('NicknameChange') == 1 || (this.displayname() && this.displayname().indexOf('(') < 0)),
        onclick: () => app.modal.show(new ChangeNickNameModal())
      })
    );
  });

  extend(EditUserModal.prototype, 'init', function () {
    const user = this.props.user;
    this.displayname = m.prop(user.displayName() === this.username() ? '' : user.displayName());
    if (this.displayname() && this.displayname() != '') {
      let usernameLength = this.username().length;
      this.nickname = m.prop(this.displayname().substring(usernameLength + 2, this.displayname().length - 1));
    }
  });

  extend(EditUserModal.prototype, 'fields', function (items) {
    items.add('nickname', <div className="Form-group">
      <label>{app.translator.trans('dem13n.forum.nickname.head_title')}</label>
      <input className="FormControl"
        placeholder={extractText(app.translator.trans('dem13n.forum.nickname.new_nickname'))}
        bidi={this.nickname} />
    </div>, 100);
  });

  extend(EditUserModal.prototype, 'data', function (data) {
    const user = this.props.user;
    if (this.displayname() === this.username()) {
      this.hide();
      return;
    } else if (this.nickname() !== '') {
      data.nickname = this.nickname();
    }
  });

});
