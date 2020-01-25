import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';

export default class ChangeNickNameModal extends Modal {

  init() {
    super.init();
    this.displayname = m.prop(app.session.user.displayName());
    if (this.displayname() && this.displayname() != '') {
      const usernameLength = app.session.user.username().length;
      this.nickname = m.prop(this.displayname().substring(usernameLength + 2, this.displayname().length - 1));
    } else {
      this.nickname = m.prop('');
    }
  }

  className() {
    return 'ChangeNickNameModal Modal--small';
  }

  title() {
    return app.translator.trans('dem13n.forum.nickname.change');
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <div className="Form-group">
            <input
              type="text"
              autocomplete="off"
              name="nickname"
              className="FormControl"
              bidi={this.nickname}
              disabled={this.loading} />
          </div>
          <div className="Form-group">
            {Button.component({
              className: 'Button Button--primary Button--block',
              type: 'submit',
              loading: this.loading,
              children: app.translator.trans('dem13n.forum.nickname.submit_button')
            })}
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();

    if (this.nickname() === app.session.user.username() || (!this.nickname() && (app.session.user.displayName() === app.session.user.username()))) {
      this.hide();
      return;
    }

    if (!confirm("設定後無法再更改，確定？")) {
      return;
    }

    this.loading = true;

    app.session.user.save({ nickname: this.nickname() }, {
      errorHandler: this.onerror.bind(this),
    })
      .then(this.hide.bind(this))
      .catch(() => {
        this.loading = false;
        m.redraw();
      });
  }
}