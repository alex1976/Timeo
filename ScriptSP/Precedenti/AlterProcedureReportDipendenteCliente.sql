USE [Timesheet_Default_v1]
GO

/****** Object:  StoredProcedure [dbo].[ReportOreClienteDipendente]    Script Date: 31/08/2018 16:20:50 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[ReportOreDipendenteCliente]
  @Dipendente varchar(100),
  @DataInizio datetime,
  @DataFine datetime
AS

SELECT 
E.Description as Dipendente,
C.Description as Cliente, 
TS.Date as Data,
Ordinario=ROUND(SUM(CONVERT(decimal(14,2), TS.Ordinary)), 2),
Extra=ROUND(SUM(CONVERT(decimal(14,2), TS.Overtime)), 2)

FROM Timesheets TS, Customers C, Employees E
WHERE TS.EmployeeId = E.EmployeeId 
AND TS.CustomerId = C.CustomerId
AND E.Description like '%'+@Dipendente+'%'
AND TS.Date >= @DataInizio
AND TS.Date <= @DataFine 
	
GROUP BY TS.Date, E.Description, C.Description
ORDER BY TS.Date
GO


