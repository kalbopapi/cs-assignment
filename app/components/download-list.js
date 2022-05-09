import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

export default class DownloadListComponent extends Component {
  @tracked isSelectAllChecked = false;

  @action selectAllAvailable() {
    console.log(this.isSelectAllChecked);
    this.isSelectAllChecked = !this.isSelectAllChecked;
    console.log(this.isSelectAllChecked);

    var checkCount = 0;

    var checkboxes = this.getCheckboxes();
    for (var i = 0; i < checkboxes.length; i++) {
      if (!checkboxes[i].disabled) {
        checkboxes[i].checked = this.isSelectAllChecked;

        if (this.isSelectAllChecked) {
          checkCount += 1;
        }
      }
    }

    var label = document.getElementById('select-all-label');
    if (checkCount > 0) {
      label.innerHTML = 'Selected ' + checkCount;
    } else {
      label.innerHTML = '';
    }
  }

  @action download() {
    var checkCount = 0;
    var output = '';

    // get list of selected items
    var checkboxes = this.getCheckboxes();
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkCount += 1;

        output += checkboxes[i].value + '\n';
      }
    }

    if (checkCount > 0) {
      alert(output);
    }
  }

  getCheckboxes() {
    return document.getElementsByClassName('select-item');
  }
}
