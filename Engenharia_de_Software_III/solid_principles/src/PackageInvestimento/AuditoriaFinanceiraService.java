package src.PackageInvestimento;

import java.util.List;

interface  Auditavel {
    void realizarAuditoria();
}

public class AuditoriaFinanceiraService {
    public void executar(List<Auditavel> auditaveis){
        for (Auditavel auditavel: auditaveis) {
            ;
        }
    }
}
