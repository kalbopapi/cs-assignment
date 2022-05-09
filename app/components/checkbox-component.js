import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

export default class CheckboxComponentComponent extends Component {
  @tracked isChecked = false;

  get disabled() {
    return this.args.status === 'scheduled';
  }

  get itemPath() {
    return this.args.item.path;
  }

  get itemDevice() {
    return this.args.item.device;
  }

  @action addToDownloads() {
    this.isChecked = !this.isChecked;

    var cbxlist = document.getElementsByClassName('select-item');
    var label = document.getElementById('select-all-label');
    var selectall = document.getElementById('select-all');
    var count = 0;
    for (var i = 0; i < cbxlist.length; i++) {
      if (cbxlist[i].checked) {
        count += 1;
      }
    }

    if (count > 0) {
      if (count === cbxlist.length) {
        selectall.indeterminate = false;
        selectall.checked = true;
      } else {
        selectall.indeterminate = true;
      }
      label.innerHTML = 'Selected ' + count;
    } else {
      selectall.indeterminate = false;
      selectall.checked = false;
      label.innerHTML = '';
    }
  }
}
