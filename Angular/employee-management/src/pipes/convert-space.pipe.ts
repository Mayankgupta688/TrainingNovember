import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "convertToSpaces"
})
export class ConvertToSpacePipe implements PipeTransform {
    transform(value: string, replaceCharacter: string, replacement: string): string {
        return value.replaceAll(replaceCharacter, replacement);
    }
}

@Pipe({
    name: "convertTimeToRequiredValue"
})
export class ConvertTimeToRequiredValuePipe implements PipeTransform {
    transform(value: Date, type: string): any {
        if(type == "second") {
            return value.getSeconds()
        } else if(type == "minutes") {
            return value.getMinutes()
        }
    }
}