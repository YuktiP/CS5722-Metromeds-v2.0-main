var matrix = [[0,0,0,0,0,0,2,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0],[0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,2,0,0,0,1,0,0,2,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],[0,0,1,5,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,2,0,1,0,0,0,0,0,0],[0,0,1,6,0,0,3,0,2,0,0,1,0,2,0,0,0,0,6,0,6,0,0,1,0,1,0,0,0,0],[0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,3,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
var packages = [{
"name": " com.metromeds.app.service.command.impl", "color": " #3182bd"
}
,{
"name": " com.metromeds.app.business.product", "color": " #6baed6"
}
,{
"name": " com.metromeds.app.interceptor.response", "color": " #9ecae1"
}
,{
"name": " com.metromeds.app.models.order", "color": " #c6dbef"
}
,{
"name": " com.metromeds.app.interceptor.request", "color": " #e6550d"
}
,{
"name": " com.metromeds.app.models.employee", "color": " #fd8d3c"
}
,{
"name": " com.metromeds.app.repository", "color": " #fdae6b"
}
,{
"name": " com.metromeds.app.service.converters", "color": " #fdd0a2"
}
,{
"name": " com.metromeds.app.service", "color": " #31a354"
}
,{
"name": " com.metromeds.app", "color": " #74c476"
}
,{
"name": " com.metromeds.app.business.customer.customertiers.tierconfiguration", "color": " #a1d99b"
}
,{
"name": " com.metromeds.app.service.command", "color": " #c7e9c0"
}
,{
"name": " com.metromeds.app.logger", "color": " #756bb1"
}
,{
"name": " com.metromeds.app.models.customer", "color": " #9e9ac8"
}
,{
"name": " com.metromeds.app.business.employee", "color": " #bcbddc"
}
,{
"name": " com.metromeds.app.config", "color": " #dadaeb"
}
,{
"name": " com.metromeds.app.business.customer.customertiers", "color": " #636363"
}
,{
"name": " com.metromeds.app.business.bill", "color": " #969696"
}
,{
"name": " com.metromeds.app.models.payment", "color": " #bdbdbd"
}
,{
"name": " com.metromeds.app.interceptor", "color": " #d9d9d9"
}
,{
"name": " com.metromeds.app.models.bill", "color": " #3182bd"
}
,{
"name": " com.metromeds.app.business.order.deliveryinfo", "color": " #6baed6"
}
,{
"name": " com.metromeds.app.models.product", "color": " #9ecae1"
}
,{
"name": " com.metromeds.app.handlers", "color": " #c6dbef"
}
,{
"name": " com.metromeds.app.business.login", "color": " #e6550d"
}
,{
"name": " com.metromeds.app.business.customer", "color": " #fd8d3c"
}
,{
"name": " com.metromeds.app.business.order", "color": " #fdae6b"
}
,{
"name": " com.metromeds.app.business.payment", "color": " #fdd0a2"
}
,{
"name": " com.metromeds.app.business.discount", "color": " #31a354"
}
,{
"name": " com.metromeds.app.business.customer.customertiers.tierfactory", "color": " #74c476"
}
];
