import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { UserService } from '../user/user.service';
@Injectable()
export class Utility {
    static isLocal = (window.location.origin.includes('http://localhost')) ? true : false;
    static appName = 'landroidFrontend';
    static userDetails: any = {};
    static loggedInCountryDetails: any = {};
    static countryCodeNameMap: any = {};
    static countryCodeDetailMap: any = {};
    static countryAccessMap: any = {};
    static countryIdMap: any = {};
    static countryIdCodeMap: any = {};
    static displayCountriesMap = {};
    static redirection: any;
    static commonStaticObject: any = {};
    static fullOriginPath = window.location.origin;
    static roleActions: any = {};
    static localUrl = '';
    static user = (Utility.isLocal) ? 'landroid' : '';
    static forcedRoute = false;
    static applicationConfig: any = {};
    static files: File;
    static featuresList: any = {};
    static consolidatedAuthorizes: any = {};
    static loggedInUserDetails: any = {};
    static countryNameCodeMap: any = {};
    static countryCodeRegionMap: any = {};
    static regionCodeCountryMap: any = {};
    static originPath = `${Utility.fullOriginPath + window.location.pathname}`;
    // static originPath = 'http://localhost:8080/';
    // static originPath = 'http://192.168.124.38:8080';
    // static originPath = 'http://192.168.0.102:8080/';
    // static originPath = 'http://192.168.2.183:8080/';
    static countryList: any;
    static stubbingSettings = {
        stubbingFeatureEnabled: false,
        isStubbedMode: false,
        isStubLoading: false,
        showStubbingView: false,
        allowedUtilObjs: [
            { displayName: 'Sentry APIs', enabled: false, utilReference: 'sentryHeartbeat', isAlive: false },
            { displayName: 'Data Service APIs', enabled: true, utilReference: 'dataServiceHeartbeat', isAlive: false },
            { displayName: 'Analysis Microservice APIs', enabled: true, utilReference: 'analysisServiceHeartbeat', isAlive: false }
        ]
    }

    static baseUrls = {
        // userServiceBase: `${Utility.originPath}api/v1`,
        // userServiceBase2: `${Utility.originPath}/api/v1`
        // userServiceBase: `http://192.168.24.72:8080/api/v1`
        userServiceBase: `http://localhost:8080/api/v1`
    };
    static urlParams = {
        // login: { name: 'login', url: `${Utility.baseUrls.userServiceBase}/login`, type: 'POST' },
        logout: { url: '/logout', type: 'POST' },
        bulkUploadTemplates: { name: 'bulkUploadTemplates', url: `${Utility.fullOriginPath + window.location.pathname}assets/templates`, type: 'GET' },
        getApplicationConfig: { name: 'getApplicationConfig', url: `${Utility.fullOriginPath + window.location.pathname}assets/config/nav.config.json`, type: 'GET' },
        getCategories: { url: `${Utility.baseUrls.userServiceBase}/statusAndCount`, type: 'GET' },
        getQuotesSummary: { url: `${Utility.baseUrls.userServiceBase}/monthlyOrders`, type: 'GET' },
        getCustomersCount: { url: `${Utility.baseUrls.userServiceBase}/totalUserCount`, type: 'GET' },
        getQuotes: { url: `${Utility.baseUrls.userServiceBase}/orders`, type: 'GET' },
        getQuoteItems: { url: `${Utility.baseUrls.userServiceBase}/quote/item/filter`, type: 'POST' },
        addQuote: { url: `${Utility.baseUrls.userServiceBase}/orders`, type: 'POST' },
        addQuoteItem: { url: `${Utility.baseUrls.userServiceBase}/quote/item`, type: 'POST' },
        updateQuote: { url: `${Utility.baseUrls.userServiceBase}/orders/{id}`, type: 'PUT' },
        deleteQuote: { url: `${Utility.baseUrls.userServiceBase}/orders/{id}`, type: 'DELETE' },
        updateQuoteItem: { url: `${Utility.baseUrls.userServiceBase}/quote/item`, type: 'PUT' },
        addQuoteLog: { url: `${Utility.baseUrls.userServiceBase}/quote/log`, type: 'POST' },
        getRates: { url: `${Utility.baseUrls.userServiceBase}/api/v1/items`, type: 'GET' },
        addRate: { url: `${Utility.baseUrls.userServiceBase}/rate-sheet`, type: 'POST' },
        updateRate: { url: `${Utility.baseUrls.userServiceBase}/rate-sheet`, type: 'PUT' },
        addUser: { url: `${Utility.baseUrls.userServiceBase}/inventory`, type: 'POST' },
        updateUser: { url: `${Utility.baseUrls.userServiceBase}/inventory/{id}`, type: 'PUT' },
        getUser: { url: `${Utility.baseUrls.userServiceBase}/inventory`, type: 'GET' },
        deleteUser: { url: `${Utility.baseUrls.userServiceBase}/inventory/{id}`, type: 'DELETE' },
        addAttendance: { url: `${Utility.baseUrls.userServiceBase}/attendances`, type: 'POST' },
        updateAttendance: { url: `${Utility.baseUrls.userServiceBase}/attendances/{id}`, type: 'PUT' },
        getAttendance: { url: `${Utility.baseUrls.userServiceBase}/attendances`, type: 'GET' },
        getEmployeesCount: { url: `${Utility.baseUrls.userServiceBase}/employees/count`, type: 'GET' },
        getTodayAttendanceCount: { url: `${Utility.baseUrls.userServiceBase}/attendances/count`, type: 'GET' },
        getDepartmentsCount: { url: `${Utility.baseUrls.userServiceBase}/departments/count`, type: 'GET' },
        getContractCount: { url: `${Utility.baseUrls.userServiceBase}/contracts/count`, type: 'GET' },
        getCustomerCount: { url: `${Utility.baseUrls.userServiceBase}/customers/count`, type: 'GET' },
        getLeadCount: { url: `${Utility.baseUrls.userServiceBase}/leads/count`, type: 'GET' },
        getProposalCount: { url: `${Utility.baseUrls.userServiceBase}/proposals/count`, type: 'GET' },
        getCategoriesCount: { url: `${Utility.baseUrls.userServiceBase}/categories/count`, type: 'GET' },
        getDistributionCentersCount: { url: `${Utility.baseUrls.userServiceBase}/distribution-centers/count`, type: 'GET' },
        getItemsCount: { url: `${Utility.baseUrls.userServiceBase}/items/count`, type: 'GET' },
        getLogsiticsCount: { url: `${Utility.baseUrls.userServiceBase}/logistics/count`, type: 'GET' },
        getLogsiticsAmountCount: { url: `${Utility.baseUrls.userServiceBase}/logistics/count/total-price`, type: 'GET' },
        getPOCount: { url: `${Utility.baseUrls.userServiceBase}/purchase-orders/count`, type: 'GET' },
        getSOCount: { url: `${Utility.baseUrls.userServiceBase}/service-orders/count`, type: 'GET' },
        getVendorsCount: { url: `${Utility.baseUrls.userServiceBase}/vendors/count`, type: 'GET' },
        getZonesCount: { url: `${Utility.baseUrls.userServiceBase}/zones/count`, type: 'GET' },
        getPayableAccountsCount: { url: `${Utility.baseUrls.userServiceBase}/ap-accounts/count`, type: 'GET' },
        getPayablePOCount: { url: `${Utility.baseUrls.userServiceBase}/ap-po-transactions/count`, type: 'GET' },
        getPayableSOCount: { url: `${Utility.baseUrls.userServiceBase}/ap-so-transactions/count`, type: 'GET' },
        getReceivableAccountsCount: { url: `${Utility.baseUrls.userServiceBase}/ar-accounts/count`, type: 'GET' },
        getReceivablesCount: { url: `${Utility.baseUrls.userServiceBase}/ar-transactions/count`, type: 'GET' },
        getAuditLogCount: { url: `${Utility.baseUrls.userServiceBase}/audit-schedules/count`, type: 'GET' },
        getGeneralLedgerCount: { url: `${Utility.baseUrls.userServiceBase}/general-ledgers/count`, type: 'GET' },
        getInvoicesCount: { url: `${Utility.baseUrls.userServiceBase}/invoices/count`, type: 'GET' },
        getTotalTaxCount: { url: `${Utility.baseUrls.userServiceBase}/invoices/total-tax-amount`, type: 'GET' },
        getOrdersCount: { url: `${Utility.baseUrls.userServiceBase}/orders/count`, type: 'GET' },
        getTransactionsTodayCount: { url: `${Utility.baseUrls.userServiceBase}/transactions/today/count`, type: 'GET' },
        getTransactionsPayableAmountCount: { url: `${Utility.baseUrls.userServiceBase}/transactions/payable-amount`, type: 'GET' },
        getTransactionsReceivableAmountCount: { url: `${Utility.baseUrls.userServiceBase}/transactions/receivable-amount`, type: 'GET' },
        getTransactionsCashInflowCount: { url: `${Utility.baseUrls.userServiceBase}/transactions/cashflow/inflow`, type: 'GET' },
        getTransactionsCashOutflowCount: { url: `${Utility.baseUrls.userServiceBase}/transactions/cashflow/outflow`, type: 'GET' },
        login: { url: `${Utility.baseUrls.userServiceBase}/employees/loginn`, type: 'POST' },


        addLeaves: { url: `${Utility.baseUrls.userServiceBase}/leave-requests`, type: 'POST' },
        updateLeaves: { url: `${Utility.baseUrls.userServiceBase}/leave-requests/{id}`, type: 'PUT' },
        getLeaves: { url: `${Utility.baseUrls.userServiceBase}/leave-requests`, type: 'GET' },

        addPayroll: { url: `${Utility.baseUrls.userServiceBase}/payrolls`, type: 'POST' },
        updatePayroll: { url: `${Utility.baseUrls.userServiceBase}/payrolls/{id}`, type: 'PUT' },
        getPayroll: { url: `${Utility.baseUrls.userServiceBase}/payrolls`, type: 'GET' },

        addDepartment: { url: `${Utility.baseUrls.userServiceBase}/departments`, type: 'POST' },
        updateDepartment: { url: `${Utility.baseUrls.userServiceBase}/departments/{id}`, type: 'PUT' },
        getDepartment: { url: `${Utility.baseUrls.userServiceBase}/departments`, type: 'GET' },

        addEmployee: { url: `${Utility.baseUrls.userServiceBase}/employees`, type: 'POST' },
        updateEmployee: { url: `${Utility.baseUrls.userServiceBase}/employees/{id}`, type: 'PUT' },
        getEmployee: { url: `${Utility.baseUrls.userServiceBase}/employees`, type: 'GET' },

        addDocument: { url: `http://localhost:8081/api/v1/documents`, type: 'POST' },
        updateDocument: { url: `${Utility.baseUrls.userServiceBase}/documents/{id}`, type: 'PUT' },
        getDocument: { url: `${Utility.baseUrls.userServiceBase}/documents`, type: 'GET' },

        //Finance

        addAccountsReceivable: { url: `${Utility.baseUrls.userServiceBase}/ar-accounts`, type: 'POST' },
        updateAccountsReceivable: { url: `${Utility.baseUrls.userServiceBase}/ar-accounts/{id}`, type: 'PUT' },
        getAccountsReceivable: { url: `${Utility.baseUrls.userServiceBase}/ar-accounts`, type: 'GET' },

        addTransactions: { url: `${Utility.baseUrls.userServiceBase}/ar-transactions`, type: 'POST' },
        updateTransactions: { url: `${Utility.baseUrls.userServiceBase}/ar-transactions/{id}`, type: 'PUT' },
        getTransactions: { url: `${Utility.baseUrls.userServiceBase}/ar-transactions`, type: 'GET' },

        addAPPOTransactions: { url: `${Utility.baseUrls.userServiceBase}/ap-po-transactions`, type: 'POST' },
        updateAPPOTransactions: { url: `${Utility.baseUrls.userServiceBase}/ap-po-transactions/{id}`, type: 'PUT' },
        getAPPOTransactions: { url: `${Utility.baseUrls.userServiceBase}/ap-po-transactions`, type: 'GET' },

        addAPSOTransactions: { url: `${Utility.baseUrls.userServiceBase}/ap-so-transactions`, type: 'POST' },
        updateAPSOTransactions: { url: `${Utility.baseUrls.userServiceBase}/ap-so-transactions/{id}`, type: 'PUT' },
        getAPSOTransactions: { url: `${Utility.baseUrls.userServiceBase}/ap-so-transactions`, type: 'GET' },

        addGeneralLedger: { url: `${Utility.baseUrls.userServiceBase}/general-ledgers`, type: 'POST' },
        updateGeneralLedger: { url: `${Utility.baseUrls.userServiceBase}/general-ledgers/{id}`, type: 'PUT' },
        getGeneralLedger: { url: `${Utility.baseUrls.userServiceBase}/general-ledgers`, type: 'GET' },
        getLedgerForecast: { url: `http://192.168.24.72:5001/api/v1/ledger-forecast`, type: 'GET' },

        addAccountsPayable: { url: `${Utility.baseUrls.userServiceBase}/ap-accounts`, type: 'POST' },
        updateAccountsPayable: { url: `${Utility.baseUrls.userServiceBase}/ap-accounts/{id}`, type: 'PUT' },
        getAccountsPayable: { url: `${Utility.baseUrls.userServiceBase}/ap-accounts`, type: 'GET' },

        addBudget: { url: `${Utility.baseUrls.userServiceBase}/budget`, type: 'POST' },
        updateBudget: { url: `${Utility.baseUrls.userServiceBase}/budget`, type: 'PUT' },
        getBudget: { url: `${Utility.baseUrls.userServiceBase}/all-budgets`, type: 'GET' },

        addAuditLog: { url: `${Utility.baseUrls.userServiceBase}/audit-schedules`, type: 'POST' },
        updateAuditLog: { url: `${Utility.baseUrls.userServiceBase}/audit-schedules/{id}`, type: 'PUT' },
        getAuditLog: { url: `${Utility.baseUrls.userServiceBase}/audit-schedules`, type: 'GET' },

        addInvoice: { url: `${Utility.baseUrls.userServiceBase}/invoices`, type: 'POST' },
        updateInvoice: { url: `${Utility.baseUrls.userServiceBase}/invoices/{id}`, type: 'PUT' },
        getInvoice: { url: `${Utility.baseUrls.userServiceBase}/invoices`, type: 'GET' },

        addAccounts: { url: `${Utility.baseUrls.userServiceBase}/accounts`, type: 'POST' },
        updateAccounts: { url: `${Utility.baseUrls.userServiceBase}/accounts`, type: 'PUT' },
        getAccounts: { url: `${Utility.baseUrls.userServiceBase}/all-accounts`, type: 'GET' },

        addOrder: { url: `${Utility.baseUrls.userServiceBase}/orders`, type: 'POST' },
        updateOrder: { url: `${Utility.baseUrls.userServiceBase}/orders/{id}`, type: 'PUT' },
        getOrders: { url: `${Utility.baseUrls.userServiceBase}/orders`, type: 'GET' },


        //SCM

        addPO: { url: `${Utility.baseUrls.userServiceBase}/purchase-orders`, type: 'POST' },
        updatePO: { url: `${Utility.baseUrls.userServiceBase}/purchase-orders/{id}`, type: 'PUT' },
        getPO: { url: `${Utility.baseUrls.userServiceBase}/purchase-orders`, type: 'GET' },

        addSO: { url: `${Utility.baseUrls.userServiceBase}/service-orders`, type: 'POST' },
        updateSO: { url: `${Utility.baseUrls.userServiceBase}/service-orders/{id}`, type: 'PUT' },
        getSO: { url: `${Utility.baseUrls.userServiceBase}/service-orders`, type: 'GET' },

        addDistributionCenter: { url: `${Utility.baseUrls.userServiceBase}/distribution-centers`, type: 'POST' },
        updateDistributionCenter: { url: `${Utility.baseUrls.userServiceBase}/distribution-centers/{id}`, type: 'PUT' },
        getDistributionCenter: { url: `${Utility.baseUrls.userServiceBase}/distribution-centers`, type: 'GET' },

        addZone: { url: `${Utility.baseUrls.userServiceBase}/zones`, type: 'POST' },
        updateZone: { url: `${Utility.baseUrls.userServiceBase}/zones/{id}`, type: 'PUT' },
        getZone: { url: `${Utility.baseUrls.userServiceBase}/zones`, type: 'GET' },

        addRatesheet: { url: `${Utility.baseUrls.userServiceBase}/rate-sheets`, type: 'POST' },
        updateRatesheet: { url: `${Utility.baseUrls.userServiceBase}/rate-sheets/{id}`, type: 'PUT' },
        getRatesheet: { url: `${Utility.baseUrls.userServiceBase}/rate-sheets`, type: 'GET' },

        addCustomer: { url: `${Utility.baseUrls.userServiceBase}/customers`, type: 'POST' },
        updateCustomer: { url: `${Utility.baseUrls.userServiceBase}/customers/{id}`, type: 'PUT' },
        getCustomer: { url: `${Utility.baseUrls.userServiceBase}/customers`, type: 'GET' },

        addVendor: { url: `${Utility.baseUrls.userServiceBase}/vendors`, type: 'POST' },
        updateVendor: { url: `${Utility.baseUrls.userServiceBase}/vendors/{id}`, type: 'PUT' },
        getVendor: { url: `${Utility.baseUrls.userServiceBase}/vendors`, type: 'GET' },

        addLogistics: { url: `${Utility.baseUrls.userServiceBase}/logistics`, type: 'POST' },
        updateLogistics: { url: `${Utility.baseUrls.userServiceBase}/logistics/{id}`, type: 'PUT' },
        getLogistics: { url: `${Utility.baseUrls.userServiceBase}/logistics`, type: 'GET' },

        addItem: { url: `${Utility.baseUrls.userServiceBase}/items`, type: 'POST' },
        updateItem: { url: `${Utility.baseUrls.userServiceBase}/items/{id}`, type: 'PUT' },
        getItem: { url: `${Utility.baseUrls.userServiceBase}/items`, type: 'GET' },

        addCategory: { url: `${Utility.baseUrls.userServiceBase}/categories`, type: 'POST' },
        updateCategory: { url: `${Utility.baseUrls.userServiceBase}/categories/{id}`, type: 'PUT' },
        getCategory: { url: `${Utility.baseUrls.userServiceBase}/categories`, type: 'GET' },

        //CRM
        addLead: { url: `${Utility.baseUrls.userServiceBase}/leads`, type: 'POST' },
        updateLead: { url: `${Utility.baseUrls.userServiceBase}/leads/{id}`, type: 'PUT' },
        getLead: { url: `${Utility.baseUrls.userServiceBase}/leads`, type: 'GET' },

        addFollowUp: { url: `${Utility.baseUrls.userServiceBase}/lead-follow-ups`, type: 'POST' },
        updateFollowUp: { url: `${Utility.baseUrls.userServiceBase}/lead-follow-ups/{id}`, type: 'PUT' },
        getFollowUp: { url: `${Utility.baseUrls.userServiceBase}/lead-follow-ups`, type: 'GET' },

        addLog: { url: `${Utility.baseUrls.userServiceBase}/logs`, type: 'POST' },
        updateLog: { url: `${Utility.baseUrls.userServiceBase}/logs/{id}`, type: 'PUT' },
        getLog: { url: `${Utility.baseUrls.userServiceBase}/logs`, type: 'GET' },

        addContract: { url: `${Utility.baseUrls.userServiceBase}/contracts`, type: 'POST' },
        updateContract: { url: `${Utility.baseUrls.userServiceBase}/contracts/{id}`, type: 'PUT' },
        getContract: { url: `${Utility.baseUrls.userServiceBase}/contracts`, type: 'GET' },
        getContractForecast: { url: `http://192.168.24.72:5000/api/v1/contract-forecast`, type: 'GET' },

        addProposal: { url: `${Utility.baseUrls.userServiceBase}/proposals`, type: 'POST' },
        updateProposal: { url: `${Utility.baseUrls.userServiceBase}/proposals/{id}`, type: 'PUT' },
        getProposal: { url: `${Utility.baseUrls.userServiceBase}/proposals`, type: 'GET' },

        addFeedback: { url: `${Utility.baseUrls.userServiceBase}/feedbacks`, type: 'POST' },
        updateFeedback: { url: `${Utility.baseUrls.userServiceBase}/feedbacks/{id}`, type: 'PUT' },
        getFeedback: { url: `${Utility.baseUrls.userServiceBase}/feedbacks`, type: 'GET' },
        getReviewClassification: { url: `http://192.168.24.72:5002/api/v1/sentiment-analysis`, type: 'GET' },//MARK: need to update url here for ai

        bulkUploadFile: { name: 'bulkUploadFile', url: `${Utility.baseUrls.userServiceBase}/api/admin/file/file-upload`, type: 'POST' },
        downloadFile: { url: `${Utility.baseUrls.userServiceBase}/api/admin/file/file-upload/download`, type: 'POST' },
        rollbackFile: { url: `${Utility.baseUrls.userServiceBase}/api/admin/file/file-upload/roll-back`, type: 'POST' },

        sentryHeartbeat: { name: 'sentryHeartbeat', url: `${Utility.baseUrls.userServiceBase}/api/sentry/`, type: 'GET' },
        dataServiceHeartbeat: { name: 'dataServiceHeartbeat', url: `${Utility.baseUrls.userServiceBase}/api/data/`, type: 'GET' },
        analysisServiceHeartbeat: { name: 'analysisServiceHeartbeat', url: `${Utility.baseUrls.userServiceBase}/api/analysis/`, type: 'GET' },


        getAppRoles: { url: `${Utility.baseUrls.userServiceBase}/api/data/sentry/READ/userMgmtRoles`, type: 'POST' },
        getUiFeatures: { url: `${Utility.baseUrls.userServiceBase}/api/data/sentry/READ/codeToggle`, type: 'POST' },
        countryList: { url: `${Utility.baseUrls.userServiceBase}/api/data/rPAT/ALL/countries`, type: 'POST' },
        sentryAuthorize: { url: `${Utility.baseUrls.userServiceBase}/api/sentry/authorizer/filterSentryApps`, type: 'POST' },
        navMenuItems: { url: `${Utility.fullOriginPath + window.location.pathname}assets/config/nav.config.json`, type: 'GET' },


        adminScreenConfig: { url: `${Utility.fullOriginPath + window.location.pathname}assets/config`, type: 'GET' },
        adminScreenConfigNode: { url: `${Utility.baseUrls.userServiceBase}/api/appConfig?path=${Utility.applicationConfig}`, type: 'GET' },
        adminScreenUrlNameConfig: { url: `${Utility.fullOriginPath + window.location.pathname}assets/config/admin.config.json`, type: 'GET' },
        metricsTableHeaderConfig: { url: `${Utility.fullOriginPath + window.location.pathname}assets/config/tableheader.json`, type: 'GET' },

        nodeDataBase: { url: `${Utility.baseUrls.userServiceBase}/api/data/`, type: 'POST' },
        extractExcel: { url: `${Utility.baseUrls.userServiceBase}/api/extractor/extractExcel`, type: 'POST' },
        appConfig: { url: `${Utility.baseUrls.userServiceBase}/api/data/platform/GET/ADMIN_APP_CONFIG`, type: 'POST' },
        appConfigUpdate: { url: `${Utility.baseUrls.userServiceBase}/api/data/platform/UPDATE/ADMIN_APP_CONFIG_UPDATE`, type: 'POST' },
        appConfigFileUpdate: { url: `${Utility.baseUrls.userServiceBase}/api/appConfig/`, type: 'POST' },

        getActivityView: { url: `${Utility.baseUrls.userServiceBase}/api/dashboard/{userId}/accounts/filter/{accountId}`, type: 'POST' },
        getActivityViewAccounts: { url: `${Utility.baseUrls.userServiceBase}/api/dashboard/{userId}/accounts/get`, type: 'GET' },

        getClearanceSummaryDetails: { url: `${Utility.baseUrls.userServiceBase}/api/clearance/{trackingId}`, type: 'GET' },
        getShipmentSummaryDetails: { url: `${Utility.fullOriginPath + window.location.pathname}assets/config/shipmentDetail.json`, type: 'GET' },
        getStatuses: { url: `${Utility.baseUrls.userServiceBase}/api/data/status/ALL`, type: 'GET' },

        getAnalysisDetail: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/get`, type: 'POST' },
        getCurrencies: { url: `${Utility.baseUrls.userServiceBase}/api/data/currencies`, type: 'POST' },
        getProposalDropDown: { url: `${Utility.baseUrls.userServiceBase}/api/data/rPAT/READ/prpsDrpDwn`, type: 'POST' },
        costVersionDrpDwn: { url: `${Utility.baseUrls.userServiceBase}/api/data/rPAT/READ/costVersionDrpDwn`, type: 'POST' },

        getAnalysisRequests: { url: `${Utility.baseUrls.userServiceBase}/api/data/rPAT/READ/ecdAnalysisDrpDwn`, type: 'POST' },

        importFromECD: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/{analysisId}/scenario/{scenarioId}/importFromEcd`, type: 'POST' },
        adHocRequest: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/{analysisId}/adHocRequest`, type: 'POST' },

        createAnalysis: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/`, type: 'POST' },
        updateAnalysis: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/update`, type: 'PUT' },
        getOpDateDrpDwn: { url: `${Utility.baseUrls.userServiceBase}/api/data/rPAT/READ/OpDateDrpDwn`, type: 'POST' },
        pnlLineItemsReference: { url: `${Utility.baseUrls.userServiceBase}/api/data/rPAT/READ/pnlLineItemsReference`, type: 'POST' },

        getMetricsByScenario: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/{analysisId}/scenario/{scenarioId}/metrics`, type: 'GET' },
        getMetricsShipmentsByScenario: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/{analysisId}/scenario/{scenarioId}/{type}`, type: 'POST' },
        getDiscountsByScenario: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/{analysisId}/scenario/{scenarioId}/discounts`, type: 'GET' },
        getSurchargesByScenario: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/{analysisId}/scenario/{scenarioId}/surcharges/{type}`, type: 'GET' },
        saveSurchargesByScenario: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/{analysisId}/scenario/{scenarioId}/surcharges/{type}`, type: 'POST' },
        saveDiscountsByScenario: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/{analysisId}/scenario/{scenarioId}/discounts`, type: 'POST' },
        getPlDetailsByScenario: { url: `${Utility.baseUrls.userServiceBase}/api/pandl/{analysisId}/scenario/{scenarioId}/pandl`, type: 'GET' },
        updateMetricsByScenario: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/{analysisId}/scenario/{scenarioId}/metrics`, type: 'PUT' },
        generateShipments: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/{analysisId}/scenario/{scenarioId}/generateShipments`, type: 'GET' },
        saveDiscountsDataPrePopulation: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/{analysisId}/scenario/{scenarioId}/discountsDataPrePopulation`, type: 'POST' },
        downloadDiscounExcel: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/{analysisRequestId}/scenario/{scenarioId}/discounts/download`, type: 'GET' },
        uploadDiscountExcel: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/{analysisRequestId}/scenario/{scenarioId}/discounts/upload`, type: 'MultiPart-PUT' },
        pandlsummary: { url: `${Utility.baseUrls.userServiceBase}/api/pandl/{analysisRequestId}/scenario/{scenarioId}/pandlsummary/download`, type: 'GET' },
        detailedCost: { url: `${Utility.baseUrls.userServiceBase}/api/pandl/{analysisRequestId}/scenario/{scenarioId}/detailedCost/download`, type: 'GET' },
        // pandlShipments: { url: `${Utility.baseUrls.userServiceBase}/api/pandl/{analysisRequestId}/scenario/{scenarioId}/pandlShipments/download`, type: 'GET' },
        pandlShipments: { url: `${Utility.baseUrls.userServiceBase}/api/pandl/{analysisRequestId}/scenario/{scenarioId}/shipmentsCostAndRevenue/download`, type: 'GET' },
        transferDiscountsPandL: { url: `${Utility.baseUrls.userServiceBase}/api/pandl/{analysisRequestId}/scenario/{scenarioId}/transferDiscountsPandL/download`, type: 'POST' },
        transferPandL: { url: `${Utility.baseUrls.userServiceBase}/api/pandl/{analysisRequestId}/scenario/{scenarioId}/discounts/transferPandL`, type: 'GET' },
        initiateRerate: { url: `${Utility.baseUrls.userServiceBase}/api/proposal/sendShipment/`, type: 'POST' },
        pricingAnalysisScenario: { url: `${Utility.baseUrls.userServiceBase}/api/data/rPAT/READ/pricingAnalysisScenario`, type: 'POST' },
        costPoolMapping: { url: `${Utility.baseUrls.userServiceBase}/api/data/rPAT/READ/costPoolMapping`, type: 'POST' },
        rerateStatusRevenue: { url: `${Utility.baseUrls.userServiceBase}/api/data/rPAT/READ/rerateStatusRevenue`, type: 'POST' },
        rerateStatusCosting: { url: `${Utility.baseUrls.userServiceBase}/api/data/rPAT/READ/rerateStatusCosting`, type: 'POST' },
        adjustCostPandL: { url: `${Utility.baseUrls.userServiceBase}/api/pandl/{analysisId}/scenario/{scenarioId}/pandlsummary/adjustCost`, type: 'POST' },
        consumeIncrShipment: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/consumeIncrShipment/{costRequestId}`, type: 'GET' },
        costingRequest: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/scenario/{scenarioId}/costingRequest`, type: 'POST' },
        consumeincrcost: { url: `${Utility.baseUrls.userServiceBase}/api/analysis/consumeincrcost/{scenarioId}`, type: 'GET' },
    };
    static navMenuItems: any[];

    static getContextPath() {
        return window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/', window.location.pathname.length));
    }

    static seSessionStorageItem(itemName: string, item: string): void {
        sessionStorage.setItem(itemName, item);
    }

    static getSessionStorageItem(itemName: string): string {
        return sessionStorage.getItem(itemName) || '';
    }

    static getLocalStorageItem(itemName: string): string {
        return localStorage.getItem(itemName) || '';
    }

    static setLocalStorageItem(itemName: string, item: string): void {
        localStorage.setItem(itemName, item);
    }

    static clearAllSessionStorageItems() {
        return sessionStorage.clear();
    }

    static removeThisSessionItem(key: string) {
        sessionStorage.removeItem(key);
    }

    static checkIsIEOrEdge(): boolean {
        const isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
        return isIEOrEdge;
    }
}
