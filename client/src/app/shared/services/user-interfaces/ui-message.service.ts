import { Injectable, TemplateRef } from '@angular/core';
import { NzMessageDataOptions, NzMessageRef, NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class UIMessageService {

  constructor(private nzMessageService: NzMessageService) { }

  public success(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef {
    return this.nzMessageService.success(content, options);
  }
  public error(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef {
    return this.nzMessageService.error(content, options);
  }
  public info(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef {
    return this.nzMessageService.info(content, options);
  }
  public warning(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef {
    return this.nzMessageService.warning(content, options);
  }
  public loading(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef {
    return this.nzMessageService.loading(content, options);
  }
}
